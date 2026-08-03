#!/usr/bin/env node
// DEA-C01 Question Generator — Run: node scripts/run-dea.mjs
import { generateExam } from './gen.mjs';
import d1 from './dea-d1.mjs';
import d2 from './dea-d2.mjs';
import d3 from './dea-d3.mjs';
import d4 from './dea-d4.mjs';

const pool = [...d1, ...d2, ...d3, ...d4];
console.log(`\n🎓 DEA-C01 Question Pool: ${pool.length} unique questions`);
console.log(`   D1: ${d1.length} | D2: ${d2.length} | D3: ${d3.length} | D4: ${d4.length}\n`);

const domains = [
  { id: "dea-d1", name: "Domain 1: Data Ingestion and Processing" },
  { id: "dea-d2", name: "Domain 2: Data Store Management" },
  { id: "dea-d3", name: "Domain 3: Data Operations and Support" },
  { id: "dea-d4", name: "Domain 4: Data Security and Governance" },
];
const weights = [28, 26, 22, 24]; // official DEA-C01 domain weights

generateExam("DEA-C01", pool, domains, weights);
console.log("\n✅ DEA-C01: All 20 files generated (10 practice + 10 simulation sets)\n");
