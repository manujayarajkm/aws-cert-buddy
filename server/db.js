import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure ./db directory exists inside root of project
const dbDir = path.join(__dirname, '../db');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'aws_exam_guide.db');
const db = new Database(dbPath);

// Enable WAL mode for performance
db.pragma('journal_mode = WAL');

// Initialize database schema
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS exam_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    exam_code TEXT NOT NULL,
    set_id INTEGER NOT NULL,
    mode TEXT NOT NULL,
    scaled_score INTEGER NOT NULL,
    raw_score INTEGER NOT NULL,
    percentage INTEGER NOT NULL,
    passed INTEGER NOT NULL,
    time_spent_seconds INTEGER NOT NULL,
    domain_scores_json TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS user_stats (
    user_id INTEGER PRIMARY KEY,
    current_streak INTEGER DEFAULT 1,
    last_practice_date TEXT,
    dva_completed_sets TEXT DEFAULT '[]',
    dea_completed_sets TEXT DEFAULT '[]',
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

console.log(`[Database] SQLite database initialized at ${dbPath}`);

export default db;
