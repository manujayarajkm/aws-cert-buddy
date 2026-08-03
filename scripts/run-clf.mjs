#!/usr/bin/env node
// CLF-C02 Question Generator — Run: node scripts/run-clf.mjs
import { generateExam } from './gen.mjs';
import d1 from './clf-d1.mjs';
import d2 from './clf-d2.mjs';
import d3 from './clf-d3.mjs';
import d4 from './clf-d4.mjs';

const pool = [...d1, ...d2, ...d3, ...d4];
console.log(`\n🎓 CLF-C02 Question Pool: ${pool.length} unique questions`);
console.log(`   D1: ${d1.length} | D2: ${d2.length} | D3: ${d3.length} | D4: ${d4.length}\n`);

const domains = [
  { id: "clf-d1", name: "Domain 1: Cloud Concepts" },
  { id: "clf-d2", name: "Domain 2: Security and Compliance" },
  { id: "clf-d3", name: "Domain 3: Cloud Technology and Services" },
  { id: "clf-d4", name: "Domain 4: Billing, Pricing, and Support" },
];
const weights = [24, 30, 34, 12]; // official CLF-C02 domain weights

generateExam("CLF-C02", pool, domains, weights);
console.log("\n✅ CLF-C02: All 20 files generated (10 practice + 10 simulation sets)\n");
