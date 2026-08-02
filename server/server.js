import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Seed default demo user if empty
const checkDefaultUser = () => {
  const count = db.prepare('SELECT COUNT(*) as count FROM users').get().count;
  if (count === 0) {
    const insertUser = db.prepare(
      'INSERT INTO users (username, name, email, password) VALUES (?, ?, ?, ?)'
    );
    const result = insertUser.run('candidate', 'AWS Candidate', 'candidate@aws.com', 'aws123');
    
    db.prepare('INSERT INTO user_stats (user_id, current_streak) VALUES (?, 1)').run(result.lastInsertRowid);
    console.log('[Auth] Default demo user created (username: candidate, password: aws123)');
  }
};
checkDefaultUser();

// --- Auth Routes ---

// Register User
app.post('/api/auth/register', (req, res) => {
  const { username, name, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email and password are required' });
  }

  try {
    const insertUser = db.prepare(
      'INSERT INTO users (username, name, email, password) VALUES (?, ?, ?, ?)'
    );
    const result = insertUser.run(username, name || username, email, password);
    const userId = result.lastInsertRowid;

    db.prepare('INSERT INTO user_stats (user_id, current_streak) VALUES (?, 1)').run(userId);

    const user = { id: userId, username, name: name || username, email };
    return res.json({ success: true, user });
  } catch (err) {
    if (err.message.includes('UNIQUE constraint failed')) {
      return res.status(400).json({ error: 'Username or Email already registered' });
    }
    return res.status(500).json({ error: 'Failed to create user' });
  }
});

// Login User
app.post('/api/auth/login', (req, res) => {
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) {
    return res.status(400).json({ error: 'Username/Email and Password required' });
  }

  const user = db.prepare(
    'SELECT id, username, name, email, password FROM users WHERE username = ? OR email = ?'
  ).get(usernameOrEmail, usernameOrEmail);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid username/email or password' });
  }

  const userData = { id: user.id, username: user.username, name: user.name, email: user.email };
  return res.json({ success: true, user: userData });
});

// --- Progress & Analytics Routes ---

// Get User Dashboard Stats & History
app.get('/api/users/:userId/dashboard', (req, res) => {
  const userId = req.params.userId;

  const user = db.prepare('SELECT id, username, name, email, created_at FROM users WHERE id = ?').get(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const stats = db.prepare('SELECT * FROM user_stats WHERE user_id = ?').get(userId) || {
    current_streak: 1,
    dva_completed_sets: '[]',
    dea_completed_sets: '[]'
  };

  const results = db.prepare(
    'SELECT * FROM exam_results WHERE user_id = ? ORDER BY created_at DESC'
  ).all(userId);

  const parsedResults = results.map(r => ({
    id: r.id,
    examCode: r.exam_code,
    setId: r.set_id,
    mode: r.mode,
    scaledScore: r.scaled_score,
    rawScore: r.raw_score,
    percentage: r.percentage,
    passed: Boolean(r.passed),
    timeSpentSeconds: r.time_spent_seconds,
    domainScores: JSON.parse(r.domain_scores_json || '[]'),
    date: new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }));

  const totalExams = parsedResults.length;
  const passedExams = parsedResults.filter(r => r.passed).length;
  const avgScore = totalExams > 0 ? Math.round(parsedResults.reduce((acc, r) => acc + r.scaledScore, 0) / totalExams) : 0;

  return res.json({
    user,
    stats: {
      totalExamsTaken: totalExams,
      passedExamsCount: passedExams,
      averageScore: avgScore,
      currentStreakDays: stats.current_streak,
      dvaCompletedSets: JSON.parse(stats.dva_completed_sets || '[]'),
      deaCompletedSets: JSON.parse(stats.dea_completed_sets || '[]'),
      recentResults: parsedResults
    }
  });
});

// Save Exam Attempt Result
app.post('/api/users/:userId/results', (req, res) => {
  const userId = req.params.userId;
  const { examCode, setId, mode, scaledScore, rawScore, percentage, passed, timeSpentSeconds, domainScores } = req.body;

  try {
    const insertStmt = db.prepare(`
      INSERT INTO exam_results (user_id, exam_code, set_id, mode, scaled_score, raw_score, percentage, passed, time_spent_seconds, domain_scores_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertStmt.run(
      userId,
      examCode,
      setId,
      mode,
      scaledScore,
      rawScore,
      percentage,
      passed ? 1 : 0,
      timeSpentSeconds,
      JSON.stringify(domainScores || [])
    );

    // Update completed sets in user_stats
    const stats = db.prepare('SELECT * FROM user_stats WHERE user_id = ?').get(userId);
    let dvaSets = JSON.parse(stats?.dva_completed_sets || '[]');
    let deaSets = JSON.parse(stats?.dea_completed_sets || '[]');

    if (passed) {
      if (examCode === 'DVA-C02' && !dvaSets.includes(setId)) dvaSets.push(setId);
      if (examCode === 'DEA-C01' && !deaSets.includes(setId)) deaSets.push(setId);
    }

    db.prepare(`
      UPDATE user_stats
      SET dva_completed_sets = ?, dea_completed_sets = ?
      WHERE user_id = ?
    `).run(JSON.stringify(dvaSets), JSON.stringify(deaSets), userId);

    return res.json({ success: true, message: 'Exam result saved to database' });
  } catch (err) {
    console.error('Error saving result:', err);
    return res.status(500).json({ error: 'Failed to save exam result' });
  }
});

// Serve static frontend files if dist folder exists (Docker / Production build)
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(distPath, 'index.html'));
  });
  console.log(`[Production] Serving static React build from ${distPath}`);
}

app.listen(PORT, () => {
  console.log(`[API Server] Express backend with SQLite running on http://localhost:${PORT}`);
});
