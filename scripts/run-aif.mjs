#!/usr/bin/env node
// AIF-C01 Question Generator — Run: node scripts/run-aif.mjs
import { generateExam } from './gen.mjs';
import d1 from './aif-d1.mjs';
import d2 from './aif-d2.mjs';
import d3 from './aif-d3.mjs';
import d4 from './aif-d4.mjs';

const pool = [...d1, ...d2, ...d3, ...d4];
console.log(`\n🎓 AIF-C01 Question Pool: ${pool.length} unique questions`);
console.log(`   D1: ${d1.length} | D2: ${d2.length} | D3: ${d3.length} | D4: ${d4.length}\n`);

const domains = [
  { id: "aif-d1", name: "Domain 1: Fundamentals of AI and ML" },
  { id: "aif-d2", name: "Domain 2: Fundamentals of Generative AI" },
  { id: "aif-d3", name: "Domain 3: Applications of Foundation Models" },
  { id: "aif-d4", name: "Domain 4: Responsible AI, Security, and Governance" },
];
const weights = [20, 24, 28, 28]; // official AIF-C01 domain weights

generateExam("AIF-C01", pool, domains, weights);
console.log("\n✅ AIF-C01: All 20 files generated (10 practice + 10 simulation sets)\n");
