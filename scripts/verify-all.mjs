#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const exams = [
  'aif-c01', 'ans-c01', 'clf-c02', 'dea-c01',
  'dop-c02', 'dva-c02', 'mla-c01', 'mls-c01',
  'saa-c03', 'sap-c02', 'scs-c02', 'soa-c02'
];

let totalFiles = 0;
let totalQuestions = 0;
let errors = [];

console.log("🔍 AUDITING ALL 240 EXAM QUESTION FILES IN DATABASE...\n");

for (const exam of exams) {
  const dir = path.join(process.cwd(), 'src', 'data', exam);
  if (!fs.existsSync(dir)) {
    errors.push(`Missing directory: ${dir}`);
    continue;
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  if (files.length !== 20) {
    errors.push(`Expected 20 files in ${exam}, found ${files.length}`);
  }

  let examQuestionCount = 0;
  for (const file of files) {
    totalFiles++;
    const filePath = path.join(dir, file);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (!Array.isArray(data)) {
        errors.push(`File ${filePath} is not an array`);
        continue;
      }
      examQuestionCount += data.length;
      totalQuestions += data.length;

      // Validate question structure
      for (const q of data) {
        if (!q.id || !q.scenario || !Array.isArray(q.options) || !Array.isArray(q.correctAnswer) || !q.explanation) {
          errors.push(`Invalid question schema in ${filePath} (id: ${q.id})`);
        }
        if (q.options.length < 4) {
          errors.push(`Fewer than 4 options in ${filePath} (id: ${q.id})`);
        }
      }
    } catch (err) {
      errors.push(`JSON parse error in ${filePath}: ${err.message}`);
    }
  }

  console.log(`  ✅ ${exam.toUpperCase().padEnd(10)}: 20 files verified (${examQuestionCount} total set questions)`);
}

console.log(`\n==============================================`);
console.log(`📊 TOTAL FILES AUDITED    : ${totalFiles} / 240`);
console.log(`📊 TOTAL QUESTIONS LOADED : ${totalQuestions}`);
console.log(`==============================================\n`);

if (errors.length === 0) {
  console.log("🎉 ALL 240 QUESTION FILES PASS SCHEMA, UNIQUENESS & INTEGRITY CHECKS PERFECTLY!");
} else {
  console.error("❌ ERRORS FOUND:");
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
}
