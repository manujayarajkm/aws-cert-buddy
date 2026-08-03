#!/usr/bin/env node
// SAA-C03 Question Generator — Run: node scripts/run-saa.mjs
import { generateExam } from './gen.mjs';
import d1 from './saa-d1.mjs';
import d2 from './saa-d2.mjs';
import d3 from './saa-d3.mjs';
import d4 from './saa-d4.mjs';

const pool = [...d1, ...d2, ...d3, ...d4];
console.log(`\n🎓 SAA-C03 Question Pool: ${pool.length} unique questions`);
console.log(`   D1: ${d1.length} | D2: ${d2.length} | D3: ${d3.length} | D4: ${d4.length}\n`);

const domains = [
  { id: "saa-d1", name: "Domain 1: Design Secure Architectures" },
  { id: "saa-d2", name: "Domain 2: Design Resilient Architectures" },
  { id: "saa-d3", name: "Domain 3: Design High-Performing Architectures" },
  { id: "saa-d4", name: "Domain 4: Design Cost-Optimized Architectures" },
];
const weights = [30, 26, 24, 20]; // official SAA-C03 domain weights

generateExam("SAA-C03", pool, domains, weights);
console.log("\n✅ SAA-C03: All 20 files generated (10 practice + 10 simulation sets)\n");
