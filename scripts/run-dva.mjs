#!/usr/bin/env node
// DVA-C02 Question Generator — Run: node scripts/run-dva.mjs
import { generateExam } from './gen.mjs';
import d1 from './dva-d1.mjs';
import d2 from './dva-d2.mjs';
import d3 from './dva-d3.mjs';
import d4 from './dva-d4.mjs';

const pool = [...d1, ...d2, ...d3, ...d4];
console.log(`\n🎓 DVA-C02 Question Pool: ${pool.length} unique questions`);
console.log(`   D1: ${d1.length} | D2: ${d2.length} | D3: ${d3.length} | D4: ${d4.length}\n`);

const domains = [
  { id: "dva-d1", name: "Domain 1: Development with AWS Services" },
  { id: "dva-d2", name: "Domain 2: Security" },
  { id: "dva-d3", name: "Domain 3: Deployment" },
  { id: "dva-d4", name: "Domain 4: Troubleshooting and Optimization" },
];
const weights = [32, 26, 24, 18]; // official DVA-C02 domain weights

generateExam("DVA-C02", pool, domains, weights);
console.log("\n✅ DVA-C02: All 20 files generated (10 practice + 10 simulation sets)\n");
