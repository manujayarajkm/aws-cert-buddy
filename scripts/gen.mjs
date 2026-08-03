import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA = join(new URL('.', import.meta.url).pathname, '..', 'src', 'data');

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildSet(pool, examCode, setId, domains, weights, total = 65) {
  const scored = 50, unscored = total - scored;
  const byDomain = {};
  domains.forEach(d => { byDomain[d.id] = shuffle(pool.filter(q => q.d === d.id)); });

  const counts = {};
  let remaining = total;
  domains.forEach((d, i) => {
    if (i === domains.length - 1) { counts[d.id] = remaining; }
    else { counts[d.id] = Math.round(total * weights[i] / 100); remaining -= counts[d.id]; }
  });

  const selected = [];
  domains.forEach(d => {
    const avail = byDomain[d.id];
    const need = counts[d.id];
    for (let i = 0; i < need; i++) selected.push(avail[i % avail.length]);
  });

  const shuffled = shuffle(selected).slice(0, total);
  let multiIdx = 0;

  return shuffled.map((q, i) => {
    const qNum = i + 1;
    const isMulti = qNum % 5 === 0 && q.qt === 'multiple';
    return {
      id: `${examCode.toLowerCase().replace('-','')}-s${setId}-q${qNum}`,
      setId, examCode,
      domainId: q.d,
      domainName: q.dn,
      questionType: q.qt || 'single',
      selectCount: q.qt === 'multiple' ? (q.c.length) : 1,
      isScored: qNum <= scored,
      scenario: q.s,
      ...(q.code ? { codeSnippet: q.code } : {}),
      options: q.o.map((text, idx) => ({ id: String.fromCharCode(65 + idx), text })),
      correctAnswer: q.c,
      explanation: q.e,
      awsDocUrl: q.u || 'https://docs.aws.amazon.com/',
      difficulty: q.df || 'Standard'
    };
  });
}

export function generateExam(examCode, pool, domains, weights) {
  const dir = join(DATA, examCode.toLowerCase());
  mkdirSync(dir, { recursive: true });

  for (let s = 1; s <= 10; s++) {
    const set = buildSet(pool, examCode, s, domains, weights);
    writeFileSync(join(dir, `set-${s}.json`), JSON.stringify(set, null, 2));
    const sim = buildSet(pool, examCode, s, domains, weights);
    writeFileSync(join(dir, `sim-set-${s}.json`), JSON.stringify(sim, null, 2));
    console.log(`  ✓ ${examCode} set-${s} + sim-set-${s}`);
  }
}
