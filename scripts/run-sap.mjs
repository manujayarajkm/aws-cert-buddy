#!/usr/bin/env node
// SAP-C02 Question Generator — Run: node scripts/run-sap.mjs
import { generateExam } from './gen.mjs';
import d1 from './sap-d1.mjs';
import d2 from './sap-d2.mjs';
import d3 from './sap-d3.mjs';
import d4 from './sap-d4.mjs';

const pool = [...d1, ...d2, ...d3, ...d4];
console.log(`\n🎓 SAP-C02 Question Pool: ${pool.length} unique questions`);
console.log(`   D1: ${d1.length} | D2: ${d2.length} | D3: ${d3.length} | D4: ${d4.length}\n`);

const domains = [
  { id: "sap-d1", name: "Domain 1: Design Complex Organizations" },
  { id: "sap-d2", name: "Domain 2: Design New Solutions" },
  { id: "sap-d3", name: "Domain 3: Continuously Improve Existing Solutions" },
  { id: "sap-d4", name: "Domain 4: Accelerate Workload Migration and Modernization" },
];
const weights = [26, 29, 25, 20]; // official SAP-C02 domain weights

generateExam("SAP-C02", pool, domains, weights);
console.log("\n✅ SAP-C02: All 20 files generated (10 practice + 10 simulation sets)\n");
