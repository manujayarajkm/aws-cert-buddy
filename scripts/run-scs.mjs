#!/usr/bin/env node
// SCS-C02 Question Generator — Run: node scripts/run-scs.mjs
import { generateExam } from './gen.mjs';
import d1 from './scs-d1.mjs';
import d2 from './scs-d2.mjs';

const pool = [...d1, ...d2];
console.log(`\n🎓 SCS-C02 Question Pool: ${pool.length} unique questions`);
console.log(`   D1: ${d1.length} | D2: ${d2.length}\n`);

const domains = [
  { id: "scs-d1", name: "Domain 1: Threat Detection & Infrastructure Security" },
  { id: "scs-d2", name: "Domain 2: IAM, Data Protection & Governance" },
];
const weights = [50, 50]; // official SCS-C02 aggregated domain weights

generateExam("SCS-C02", pool, domains, weights);
console.log("\n✅ SCS-C02: All 20 files generated (10 practice + 10 simulation sets)\n");
