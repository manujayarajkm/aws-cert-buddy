#!/usr/bin/env node
// SOA-C02 Question Generator — Run: node scripts/run-soa.mjs
import { generateExam } from './gen.mjs';
import d1 from './soa-d1.mjs';
import d2 from './soa-d2.mjs';
import d3 from './soa-d3.mjs';

const pool = [...d1, ...d2, ...d3];
console.log(`\n🎓 SOA-C02 Question Pool: ${pool.length} unique questions`);
console.log(`   D1: ${d1.length} | D2: ${d2.length} | D3: ${d3.length}\n`);

const domains = [
  { id: "soa-d1", name: "Domain 1: Monitoring, Logging, and Remediation" },
  { id: "soa-d2", name: "Domain 2: Reliability, Automation, and Security" },
  { id: "soa-d3", name: "Domain 3: Networking and Cost Optimization" },
];
const weights = [20, 50, 30]; // official SOA-C02 aggregated domain weights

generateExam("SOA-C02", pool, domains, weights);
console.log("\n✅ SOA-C02: All 20 files generated (10 practice + 10 simulation sets)\n");
