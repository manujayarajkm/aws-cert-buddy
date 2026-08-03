#!/usr/bin/env node
// DOP-C02 Question Generator — Run: node scripts/run-dop.mjs
import { generateExam } from './gen.mjs';
import d1 from './dop-d1.mjs';
import d2 from './dop-d2.mjs';
import d3 from './dop-d3.mjs';

const pool = [...d1, ...d2, ...d3];
console.log(`\n🎓 DOP-C02 Question Pool: ${pool.length} unique questions`);
console.log(`   D1: ${d1.length} | D2: ${d2.length} | D3: ${d3.length}\n`);

const domains = [
  { id: "dop-d1", name: "Domain 1: SDLC Automation and IaC" },
  { id: "dop-d2", name: "Domain 2: Resilient Cloud Solutions and Monitoring" },
  { id: "dop-d3", name: "Domain 3: Security, Compliance, and Incident Response" },
];
const weights = [39, 30, 31]; // official DOP-C02 aggregated domain weights

generateExam("DOP-C02", pool, domains, weights);
console.log("\n✅ DOP-C02: All 20 files generated (10 practice + 10 simulation sets)\n");
