import { ExamMeta, ExamTier } from '../types/exam';

export interface TierInfo {
  tier: ExamTier;
  title: string;
  targetAudience: string;
  recommendedExperience: string;
  costInfo: string;
  durationInfo: string;
  description: string;
}

export const fontInfo: Record<ExamTier, TierInfo> = {
  Foundational: {
    tier: 'Foundational',
    title: '1. Foundational Tier',
    targetAudience: 'Absolute beginners, non-technical roles (sales/management), or cloud newcomers.',
    recommendedExperience: '0–6 months of basic IT/AWS knowledge.',
    costInfo: '$100 USD',
    durationInfo: '90 Minutes',
    description: 'Validates overall understanding of AWS Cloud concepts, security, compliance, and billing.'
  },
  Associate: {
    tier: 'Associate',
    title: '2. Associate Tier',
    targetAudience: 'Engineers, developers, admins, and analysts working directly with AWS.',
    recommendedExperience: '~1 year of hands-on experience designing, developing, or operating AWS environments.',
    costInfo: '$150 USD',
    durationInfo: '130 Minutes',
    description: 'Validates technical expertise in building, managing, and maintaining cloud applications on AWS.'
  },
  Professional: {
    tier: 'Professional',
    title: '3. Professional Tier',
    targetAudience: 'Senior engineers, lead architects, and DevOps leads designing enterprise-grade solutions.',
    recommendedExperience: '2+ years of complex, real-world AWS experience.',
    costInfo: '$300 USD',
    durationInfo: '180 Minutes',
    description: 'Validates advanced technical skills in designing multi-tier, enterprise, and complex AWS architectures.'
  },
  Specialty: {
    tier: 'Specialty',
    title: '4. Specialty Tier',
    targetAudience: 'Experts focusing deeply on a single specialized cloud discipline.',
    recommendedExperience: '2–5 years of deep domain expertise.',
    costInfo: '$300 USD',
    durationInfo: '170–180 Minutes',
    description: 'Validates deep knowledge and hands-on skill in specific cloud domains like Security, Networking, and Machine Learning.'
  }
};

export const TIER_CATALOG: TierInfo[] = [
  fontInfo.Foundational,
  fontInfo.Associate,
  fontInfo.Professional,
  fontInfo.Specialty
];

export const EXAM_CATALOG: Record<string, ExamMeta> = {
  // --- 1. FOUNDATIONAL TIER ---
  'CLF-C02': {
    code: 'CLF-C02',
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    nameOnly: 'AWS Certified Cloud Practitioner',
    tier: 'Foundational',
    subtitle: 'Core Cloud Concepts & Architecture',
    description: 'Validates overall understanding of AWS Cloud platform fundamentals, cloud security, billing, and core services.',
    targetAudience: 'Beginners, business analysts, project managers, sales leads.',
    recommendedExperience: '0–6 months basic IT and AWS awareness.',
    costUSD: 100,
    passingScore: 700,
    maxScore: 1000,
    durationMinutes: 90,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-teal-500 to-emerald-600',
    iconName: 'Cloud',
    domains: [
      { id: 'clf-d1', name: 'Domain 1: Cloud Concepts', weightPercentage: 24, description: 'AWS value proposition, cloud economics.' },
      { id: 'clf-d2', name: 'Domain 2: Security and Compliance', weightPercentage: 30, description: 'Shared responsibility model, IAM.' },
      { id: 'clf-d3', name: 'Domain 3: Cloud Technology and Services', weightPercentage: 34, description: 'Core AWS compute, storage, network services.' },
      { id: 'clf-d4', name: 'Domain 4: Billing, Pricing, and Support', weightPercentage: 12, description: 'AWS pricing models, cost explorer.' }
    ]
  },
  'AIF-C01': {
    code: 'AIF-C01',
    title: 'AWS Certified AI Practitioner (AIF-C01)',
    nameOnly: 'AWS Certified AI Practitioner',
    tier: 'Foundational',
    subtitle: 'Generative AI & Machine Learning Fundamentals',
    description: 'Validates foundational knowledge of artificial intelligence, machine learning, and generative AI concepts on AWS.',
    targetAudience: 'Business & technical professionals interested in AI/ML on AWS.',
    recommendedExperience: '0–6 months basic AI/ML & cloud awareness.',
    costUSD: 100,
    passingScore: 700,
    maxScore: 1000,
    durationMinutes: 90,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-purple-500 to-indigo-600',
    iconName: 'Sparkles',
    domains: [
      { id: 'aif-d1', name: 'Domain 1: Fundamentals of AI and ML', weightPercentage: 20, description: 'AI/ML definitions, use cases.' },
      { id: 'aif-d2', name: 'Domain 2: Fundamentals of Generative AI', weightPercentage: 24, description: 'Foundation models, Bedrock, prompt engineering.' },
      { id: 'aif-d3', name: 'Domain 3: Applications of Foundation Models', weightPercentage: 28, description: 'RAG, fine-tuning, evaluation.' },
      { id: 'aif-d4', name: 'Domain 4: Guidelines for Responsible AI', weightPercentage: 14, description: 'Safety, bias, governance.' },
      { id: 'aif-d5', name: 'Domain 5: Security and Compliance for AI', weightPercentage: 14, description: 'Data privacy, IAM policies for AI.' }
    ]
  },

  // --- 2. ASSOCIATE TIER ---
  'SAA-C03': {
    code: 'SAA-C03',
    title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    nameOnly: 'AWS Certified Solutions Architect – Associate',
    tier: 'Associate',
    subtitle: 'Resilient & Cost-Optimized Systems Design',
    description: 'Validates technical expertise in designing resilient, high-performing, secure, and cost-optimized architectures.',
    targetAudience: 'Solutions architects, systems designers, cloud engineers.',
    recommendedExperience: '1 year of hands-on experience designing AWS systems.',
    costUSD: 150,
    passingScore: 720,
    maxScore: 1000,
    durationMinutes: 130,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-amber-500 to-yellow-600',
    iconName: 'Cpu',
    domains: [
      { id: 'saa-d1', name: 'Domain 1: Design Secure Architectures', weightPercentage: 30, description: 'Access management, data security.' },
      { id: 'saa-d2', name: 'Domain 2: Design Resilient Architectures', weightPercentage: 26, description: 'High availability, fault tolerance.' },
      { id: 'saa-d3', name: 'Domain 3: Design High-Performing Architectures', weightPercentage: 24, description: 'Scalable compute, storage, networking.' },
      { id: 'saa-d4', name: 'Domain 4: Design Cost-Optimized Architectures', weightPercentage: 20, description: 'Resource optimization, cost reduction.' }
    ]
  },
  'DVA-C02': {
    code: 'DVA-C02',
    title: 'AWS Certified Developer – Associate (DVA-C02)',
    nameOnly: 'AWS Certified Developer – Associate',
    tier: 'Associate',
    subtitle: 'Serverless Application Development & SDKs',
    description: 'Validates technical expertise in developing, deploying, and debugging cloud-based applications using AWS services.',
    targetAudience: 'Software developers, serverless engineers, DevOps practitioners.',
    recommendedExperience: '1 year hands-on experience writing AWS application code.',
    costUSD: 150,
    passingScore: 720,
    maxScore: 1000,
    durationMinutes: 130,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-orange-500 to-amber-600',
    iconName: 'Code',
    domains: [
      { id: 'dva-d1', name: 'Domain 1: Development with AWS Services', weightPercentage: 32, description: 'Write code using AWS SDKs, APIs, serverless services (Lambda, DynamoDB, API Gateway).' },
      { id: 'dva-d2', name: 'Domain 2: Security', weightPercentage: 26, description: 'Implement authentication, authorization (IAM, Cognito), KMS encryption, and secrets storage.' },
      { id: 'dva-d3', name: 'Domain 3: Deployment', weightPercentage: 24, description: 'Deploy applications using CI/CD pipelines (CodePipeline, CodeBuild, SAM, CDK, ECS, App Runner).' },
      { id: 'dva-d4', name: 'Domain 4: Refactoring, Troubleshooting and Optimization', weightPercentage: 18, description: 'Code optimization, X-Ray tracing, CloudWatch monitoring, caching (ElastiCache, CloudFront).' }
    ]
  },
  'SOA-C02': {
    code: 'SOA-C02',
    title: 'AWS Certified SysOps Administrator – Associate (SOA-C02)',
    nameOnly: 'AWS Certified SysOps Administrator – Associate',
    tier: 'Associate',
    subtitle: 'Cloud Operations & Systems Administration',
    description: 'Validates expertise in deploying, managing, and operating workloads on AWS, as well as enforcing security and compliance.',
    targetAudience: 'SysOps admins, systems operations engineers.',
    recommendedExperience: '1 year hands-on experience in AWS operations.',
    costUSD: 150,
    passingScore: 720,
    maxScore: 1000,
    durationMinutes: 130,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-sky-500 to-blue-600',
    iconName: 'Server',
    domains: [
      { id: 'soa-d1', name: 'Domain 1: Monitoring, Logging, and Remediation', weightPercentage: 20, description: 'CloudWatch alarms, SSM automation.' },
      { id: 'soa-d2', name: 'Domain 2: Reliability and Business Continuity', weightPercentage: 16, description: 'EC2 Auto Scaling, Route 53 failover.' },
      { id: 'soa-d3', name: 'Domain 3: Deployment, Provisioning, and Automation', weightPercentage: 18, description: 'CloudFormation, OpsWorks, AMI management.' },
      { id: 'soa-d4', name: 'Domain 4: Security and Compliance', weightPercentage: 16, description: 'IAM policies, KMS, WAF.' },
      { id: 'soa-d5', name: 'Domain 5: Networking and Content Delivery', weightPercentage: 18, description: 'VPC design, Direct Connect, CloudFront.' },
      { id: 'soa-d6', name: 'Domain 6: Cost and Performance Optimization', weightPercentage: 12, description: 'Compute optimizer, trusted advisor.' }
    ]
  },
  'DEA-C01': {
    code: 'DEA-C01',
    title: 'AWS Certified Data Engineer – Associate (DEA-C01)',
    nameOnly: 'AWS Certified Data Engineer – Associate',
    tier: 'Associate',
    subtitle: 'Data Pipelines & Storage Management',
    description: 'Validates expertise in data ingestion, transformation, storage, data pipelines, security, and governance on AWS.',
    targetAudience: 'Data engineers, data platform architects, analytics developers.',
    recommendedExperience: '1 year hands-on experience building AWS data pipelines.',
    costUSD: 150,
    passingScore: 720,
    maxScore: 1000,
    durationMinutes: 130,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-blue-500 to-indigo-600',
    iconName: 'Database',
    domains: [
      { id: 'dea-d1', name: 'Domain 1: Data Ingestion and Processing', weightPercentage: 28, description: 'Batch/streaming ingestion (Kinesis, MSK, AppFlow, Glue, EMR) and transformation pipelines.' },
      { id: 'dea-d2', name: 'Domain 2: Data Store Management', weightPercentage: 26, description: 'Designing data stores, schema evolution, Redshift, Lake Formation, S3 storage tiers, OpenSearch.' },
      { id: 'dea-d3', name: 'Domain 3: Data Operations and Support', weightPercentage: 22, description: 'Automating pipelines, data quality checks, monitoring (CloudWatch, EventBridge), and disaster recovery.' },
      { id: 'dea-d4', name: 'Domain 4: Data Security and Governance', weightPercentage: 24, description: 'Data encryption, IAM policies, Lake Formation access control, data anonymization, and auditing.' }
    ]
  },
  'MLA-C01': {
    code: 'MLA-C01',
    title: 'AWS Certified Machine Learning Engineer – Associate (MLA-C01)',
    nameOnly: 'AWS Certified Machine Learning Engineer – Associate',
    tier: 'Associate',
    subtitle: 'ML Model Deployment & MLOps Pipelines',
    description: 'Validates expertise in building, training, tuning, and deploying machine learning models on AWS.',
    targetAudience: 'ML engineers, MLOps specialists, data scientists.',
    recommendedExperience: '1 year hands-on ML implementation on AWS.',
    costUSD: 150,
    passingScore: 720,
    maxScore: 1000,
    durationMinutes: 130,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-violet-500 to-purple-600',
    iconName: 'BrainCircuit',
    domains: [
      { id: 'mla-d1', name: 'Domain 1: Data Preparation for ML', weightPercentage: 28, description: 'Feature store, SageMaker Wrangler.' },
      { id: 'mla-d2', name: 'Domain 2: ML Model Development', weightPercentage: 26, description: 'SageMaker algorithms, hyperparameter tuning.' },
      { id: 'mla-d3', name: 'Domain 3: ML Model Deployment and Operations', weightPercentage: 24, description: 'SageMaker endpoints, MLOps pipelines.' },
      { id: 'mla-d4', name: 'Domain 4: ML Solution Security and Governance', weightPercentage: 22, description: 'Model monitor, IAM security for ML.' }
    ]
  },

  // --- 3. PROFESSIONAL TIER ---
  'SAP-C02': {
    code: 'SAP-C02',
    title: 'AWS Certified Solutions Architect – Professional (SAP-C02)',
    nameOnly: 'AWS Certified Solutions Architect – Professional',
    tier: 'Professional',
    subtitle: 'Enterprise Multi-Tier Architecture & Migration',
    description: 'Validates advanced technical skills in designing complex, enterprise-scale, and multi-account AWS environments.',
    targetAudience: 'Lead solutions architects, principal cloud engineers.',
    recommendedExperience: '2+ years complex enterprise AWS design experience.',
    costUSD: 300,
    passingScore: 750,
    maxScore: 1000,
    durationMinutes: 180,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-amber-600 to-rose-600',
    iconName: 'ShieldCheck',
    domains: [
      { id: 'sap-d1', name: 'Domain 1: Design Complex Organizations', weightPercentage: 26, description: 'AWS Organizations, Control Tower, Transit Gateway.' },
      { id: 'sap-d2', name: 'Domain 2: Design New Solutions', weightPercentage: 29, description: 'Multi-region disaster recovery, serverless enterprise.' },
      { id: 'sap-d3', name: 'Domain 3: Continuous Improvement for Existing Solutions', weightPercentage: 25, description: 'Cost optimization, security hardening.' },
      { id: 'sap-d4', name: 'Domain 4: Accelerate Workload Migration and Modernization', weightPercentage: 20, description: 'AWS Application Migration Service, Database Migration.' }
    ]
  },
  'DOP-C02': {
    code: 'DOP-C02',
    title: 'AWS Certified DevOps Engineer – Professional (DOP-C02)',
    nameOnly: 'AWS Certified DevOps Engineer – Professional',
    tier: 'Professional',
    subtitle: 'CI/CD Automation, Infrastructure as Code & Reliability',
    description: 'Validates technical expertise in provisioning, operating, and managing distributed application systems on AWS.',
    targetAudience: 'DevOps leads, Site Reliability Engineers (SREs), infrastructure architects.',
    recommendedExperience: '2+ years managing automated AWS environments.',
    costUSD: 300,
    passingScore: 750,
    maxScore: 1000,
    durationMinutes: 180,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-rose-600 to-pink-600',
    iconName: 'Workflow',
    domains: [
      { id: 'dop-d1', name: 'Domain 1: SDLC Automation', weightPercentage: 22, description: 'CodePipeline, CodeBuild, GitOps.' },
      { id: 'dop-d2', name: 'Domain 2: Configuration Management and IaC', weightPercentage: 17, description: 'CloudFormation, CDK, Config.' },
      { id: 'dop-d3', name: 'Domain 3: Resilient Cloud Solutions', weightPercentage: 15, description: 'Auto-healing, multi-AZ failover.' },
      { id: 'dop-d4', name: 'Domain 4: Monitoring and Logging', weightPercentage: 15, description: 'CloudWatch, OpenSearch, X-Ray.' },
      { id: 'dop-d5', name: 'Domain 5: Incident and Event Response', weightPercentage: 14, description: 'EventBridge, Systems Manager Incident Manager.' },
      { id: 'dop-d6', name: 'Domain 6: Security and Compliance', weightPercentage: 17, description: 'GuardDuty, Security Hub, Inspector.' }
    ]
  },

  // --- 4. SPECIALTY TIER ---
  'ANS-C01': {
    code: 'ANS-C01',
    title: 'AWS Certified Advanced Networking – Specialty (ANS-C01)',
    nameOnly: 'AWS Certified Advanced Networking – Specialty',
    tier: 'Specialty',
    subtitle: 'Complex Hybrid Cloud Networking & Transit Gateways',
    description: 'Validates expert technical skills in designing and maintaining complex network architectures on AWS.',
    targetAudience: 'Network architects, hybrid infrastructure leads.',
    recommendedExperience: '5 years networking experience, 2+ years on AWS.',
    costUSD: 300,
    passingScore: 750,
    maxScore: 1000,
    durationMinutes: 170,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-cyan-500 to-blue-600',
    iconName: 'Network',
    domains: [
      { id: 'ans-d1', name: 'Domain 1: Network Design', weightPercentage: 30, description: 'VPC peering, Transit Gateway, BGP.' },
      { id: 'ans-d2', name: 'Domain 2: Network Implementation', weightPercentage: 26, description: 'Direct Connect, Site-to-Site VPN.' },
      { id: 'ans-d3', name: 'Domain 3: Network Management and Operations', weightPercentage: 20, description: 'Route 53, CloudFront, Global Accelerator.' },
      { id: 'ans-d4', name: 'Domain 4: Network Security', weightPercentage: 24, description: 'Network Firewall, WAF, PrivateLink.' }
    ]
  },
  'SCS-C02': {
    code: 'SCS-C02',
    title: 'AWS Certified Security – Specialty (SCS-C02)',
    nameOnly: 'AWS Certified Security – Specialty',
    tier: 'Specialty',
    subtitle: 'Cloud Incident Response, KMS & Threat Mitigation',
    description: 'Validates expert technical skills in securing the AWS platform, data protection, and incident management.',
    targetAudience: 'Security architects, compliance officers, cloud security leads.',
    recommendedExperience: '2+ years hands-on AWS security experience.',
    costUSD: 300,
    passingScore: 750,
    maxScore: 1000,
    durationMinutes: 170,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-emerald-600 to-teal-700',
    iconName: 'Lock',
    domains: [
      { id: 'scs-d1', name: 'Domain 1: Threat Detection and Incident Response', weightPercentage: 14, description: 'GuardDuty, Security Hub, Detective.' },
      { id: 'scs-d2', name: 'Domain 2: Security Logging and Monitoring', weightPercentage: 18, description: 'CloudTrail, VPC Flow Logs.' },
      { id: 'scs-d3', name: 'Domain 3: Infrastructure Security', weightPercentage: 20, description: 'WAF, Shield, Network Firewall.' },
      { id: 'scs-d4', name: 'Domain 4: Identity and Access Management', weightPercentage: 16, description: 'IAM policies, SCPs, Cognito.' },
      { id: 'scs-d5', name: 'Domain 5: Data Protection and Encryption', weightPercentage: 32, description: 'KMS, Secrets Manager, S3 encryption.' }
    ]
  },
  'MLS-C01': {
    code: 'MLS-C01',
    title: 'AWS Certified Machine Learning – Specialty (MLS-C01)',
    nameOnly: 'AWS Certified Machine Learning – Specialty',
    tier: 'Specialty',
    subtitle: 'Deep Learning & SageMaker ML Pipeline Engineering',
    description: 'Validates expertise in designing, implementing, deploying, and maintaining ML solutions on AWS.',
    targetAudience: 'Data scientists, ML engineers, AI researchers.',
    recommendedExperience: '2+ years developing ML models on AWS.',
    costUSD: 300,
    passingScore: 750,
    maxScore: 1000,
    durationMinutes: 180,
    totalQuestionSets: 10,
    questionsPerSet: 65,
    scoredQuestionsCount: 50,
    unscoredQuestionsCount: 15,
    isAvailable: true, // 10 FULL PRACTICE SETS ACTIVE!
    badgeColor: 'from-fuchsia-600 to-purple-700',
    iconName: 'Cpu',
    domains: [
      { id: 'mls-d1', name: 'Domain 1: Data Engineering', weightPercentage: 20, description: 'S3 data prep, Glue, Kinesis.' },
      { id: 'mls-d2', name: 'Domain 2: Exploratory Data Analysis', weightPercentage: 24, description: 'SageMaker Clarify, feature engineering.' },
      { id: 'mls-d3', name: 'Domain 3: Modeling', weightPercentage: 36, description: 'Deep learning, hyperparameter optimization.' },
      { id: 'mls-d4', name: 'Domain 4: Machine Learning Implementation and Operations', weightPercentage: 20, description: 'SageMaker deployment, monitoring.' }
    ]
  }
};
