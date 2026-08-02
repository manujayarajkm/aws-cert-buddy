# ☁️ AWS Certification Practice Suite & Exam Guide

A comprehensive, one-stop AWS Certification simulation and learning platform covering **all 12 official AWS Certifications** across **4 Tiers** (Foundational, Associate, Professional, and Specialty).

Featuring authentic **65-question exam simulations**, **50 scored vs 15 experimental beta question splits**, **retake question & option scrambling**, **candidate analytics dashboard**, and **persistent local data storage**.

---

## 🌟 Key Features

### 1. Complete 12 AWS Certification Catalog Across 4 Tiers
Every official AWS certification features **10 full practice exam sets** (65 questions per set, 120 sets total, 7,800 total scenario questions):

- **1. Foundational Tier** ($100 USD | 90 Mins | 0–6 Months Experience):
  - `AWS Certified Cloud Practitioner (CLF-C02)` – 10 Sets
  - `AWS Certified AI Practitioner (AIF-C01)` – 10 Sets
- **2. Associate Tier** ($150 USD | 130 Mins | ~1 Year Experience):
  - `AWS Certified Solutions Architect – Associate (SAA-C03)` – 10 Sets
  - `AWS Certified Developer – Associate (DVA-C02)` – 10 Sets
  - `AWS Certified SysOps Administrator – Associate (SOA-C02)` – 10 Sets
  - `AWS Certified Data Engineer – Associate (DEA-C01)` – 10 Sets
  - `AWS Certified Machine Learning Engineer – Associate (MLA-C01)` – 10 Sets
- **3. Professional Tier** ($300 USD | 180 Mins | 2+ Years Experience):
  - `AWS Certified Solutions Architect – Professional (SAP-C02)` – 10 Sets
  - `AWS Certified DevOps Engineer – Professional (DOP-C02)` – 10 Sets
- **4. Specialty Tier** ($300 USD | 170–180 Mins | 2–5 Years Experience):
  - `AWS Certified Advanced Networking – Specialty (ANS-C01)` – 10 Sets
  - `AWS Certified Security – Specialty (SCS-C02)` – 10 Sets
  - `AWS Certified Machine Learning – Specialty (MLS-C01)` – 10 Sets

---

### 2. Authentic 65-Question AWS Exam Simulation Format
- **50 Scored Questions + 15 Unscored Beta Questions**:
  - Mimics official AWS test center sittings. Your **100–1000 scaled score** is derived strictly from the 50 scored questions.
  - The 15 experimental beta questions are presented seamlessly during the test, with post-exam analytics revealing your performance on both categories.
- **Dual Exam Modes**:
  - **Mode A (Instant Feedback)**: Reveals answer explanations and official AWS documentation links after every question.
  - **Mode B (Full Exam Simulation)**: Real-time countdown timer (90 to 180 minutes) with full scoring breakdown at the end.
- **Fisher-Yates Retake Scrambling**:
  - Automatically shuffles question order AND option presentation keys (A, B, C, D) on every attempt to evaluate true concept mastery.

---

### 3. Dedicated Candidate Analytics Dashboard
- **AWS Exam Readiness Index (0–100%)**: Color-coded readiness badge (`HIGHLY EXAM READY`, `MODERATE READINESS`, `PRACTICE NEEDED`).
- **AWS Scaled Score Trajectory Bar Chart**: Visual bar graph displaying performance trends across historical sittings with a dashed **AWS Passing Benchmark line (720 / 1000)**.
- **Domain Accuracy Breakdown**: Horizontal domain mastery progress bars.
- **Personalized Study Suggestions**: Automated recommendations targeting lower-accuracy domains (<75%).
- **Attempt History Log**: Complete historical log table of all previous sittings.

---

### 4. Candidate Profile Management & Top-Right Auth
- Top-right corner **Log In** and **Sign Up** buttons for Guest candidates.
- Candidate Profile pill and dropdown menu with **My Performance Dashboard** and **Log Out (Continue as Guest)** capability.
- Persistent user progress sync with SQLite backend database.

---

## 🚀 How to Run Locally

### 1. Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### 2. Installation
```bash
git clone https://github.com/manujayarajkm/aws-cert-buddy.git
cd aws-cert-buddy
npm install
```

### 3. Start Backend & Frontend Development Servers
- **Start Express Backend API** (Port 4000):
  ```bash
  npm run server
  ```
- **Start Vite Frontend App** (Port 3000):
  ```bash
  npm run dev
  ```
- Open your browser at `http://localhost:3000`.

### 4. Run Unit Tests
```bash
npm test
```

---

## 🐳 Running with Docker & Docker Compose

You can containerize and run the complete application using Docker Compose:

### 1. Build and Start Container
```bash
docker compose up --build -d
```

### 2. Access Application
Open your browser at `http://localhost:4000`.

### 3. Stop Container
```bash
docker compose down
```

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Lucide React Icons, Canvas Confetti.
- **Backend API**: Node.js, Express 5.x.
- **Database / Persistence**: Better-SQLite3, persistent file database stored in `./db/aws_exam_guide.db`.
- **Testing**: Vitest, React Testing Library.
- **Containerization**: Multi-stage Dockerfile, Docker Compose.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 💖 Author & Credits

Made with ❤️ from **[Manu Jayaraj](https://github.com/manujayarajkm/aws-cert-buddy)**.
