#!/usr/bin/env node
// MLS-C01 Question Generator — Run: node scripts/run-mls.mjs
import { generateExam } from './gen.mjs';
import { mlPool } from './ml-pool.mjs';

const domains = [
  { id: "ml-d1", name: "Domain 1: ML Engineering, Data Engineering & Model Operations" },
];
const weights = [100];

generateExam("MLS-C01", mlPool, domains, weights);
console.log("\n✅ MLS-C01: All 20 files generated (10 practice + 10 simulation sets)\n");
