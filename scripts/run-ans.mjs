#!/usr/bin/env node
// ANS-C01 Question Generator — Run: node scripts/run-ans.mjs
import { generateExam } from './gen.mjs';
import d1 from './ans-d1.mjs';

const pool = [...d1];
console.log(`\n🎓 ANS-C01 Question Pool: ${pool.length} unique questions`);

const domains = [
  { id: "ans-d1", name: "Domain 1: Network Design, Implementation & Security" },
];
const weights = [100];

generateExam("ANS-C01", pool, domains, weights);
console.log("\n✅ ANS-C01: All 20 files generated (10 practice + 10 simulation sets)\n");
