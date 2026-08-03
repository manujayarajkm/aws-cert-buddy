// DEA-C01 Domain 4: Data Security and Governance (24%)
const D = "dea-d4", DN = "Domain 4: Data Security and Governance";
export default [
{d:D,dn:DN,qt:"single",s:"A data governance team requires fine-grained column-level and row-level access control on S3 data lake tables for different business units querying data through Athena and Redshift Spectrum. Which service should be used to enforce these security policies centrally?",
o:["AWS Lake Formation","AWS IAM Access Analyzer","Amazon S3 Bucket Policies","AWS WAF"],
c:["A"],e:"AWS Lake Formation provides fine-grained access control (FGAC) allowing security administrators to grant column-level, row-level, and cell-level permissions on Glue Data Catalog tables enforced across Athena, EMR, and Redshift Spectrum.",df:"Standard",u:"https://docs.aws.amazon.com/lake-formation/latest/dg/granting-permissions.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to discover PII (Personally Identifiable Information) such as SSNs and credit card numbers stored in S3 data lake buckets. Which AWS security service uses machine learning to automatically inspect and flag sensitive data?",
o:["Amazon Macie","Amazon GuardDuty","AWS Inspector","AWS KMS"],
c:["A"],e:"Amazon Macie uses machine learning and pattern matching to discover, classify, and protect sensitive data (PII, financial records, credentials) stored in Amazon S3 buckets.",df:"Standard",u:"https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer must ensure that all data written to an Amazon S3 data lake bucket is encrypted at rest using encryption keys managed by the security team with strict access control and auditing. Which encryption method satisfies this requirement?",
o:["Server-Side Encryption with Customer Managed KMS Keys (SSE-KMS)","Server-Side Encryption with Amazon S3 Managed Keys (SSE-S3)","Client-Side Plaintext Storage","S3 Bucket ACL Public Access"],
c:["A"],e:"SSE-KMS with Customer Managed Keys (CMKs) provides full customer control over key policies, rotation, and audit logs via AWS CloudTrail for every encrypt/decrypt API call.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html"},

{d:D,dn:DN,qt:"single",s:"An application writing sensitive record fields to an S3 data lake needs to anonymize PII data by replacing identifying attributes with cryptographic hash values before saving files. What technique does this describe?",
o:["Data Pseudonymization / Hashing","Data Tokenization via KMS","S3 Versioning","S3 Object Locking"],
c:["A"],e:"Data Pseudonymization (or hashing using algorithms like SHA-256) transforms identifiable data fields into unidentifiable hash strings before writing to public data lakes.",df:"Standard",u:"https://docs.aws.amazon.com/wellarchitected/latest/financial-services-industry-lens/data-anonymization.html"},

{d:D,dn:DN,qt:"multiple",s:"A data engineer is granting access to an S3 bucket hosting a data lake. Which TWO mechanisms ensure least privilege access control? (Select TWO.)",
o:["IAM Policies attached to roles defining explicit S3 read/write permissions","S3 Bucket Policies restricting access to specific VPC Endpoints and IAM roles","Disabling S3 Block Public Access","Granting wildcard s3:* permissions on all resources","Using public S3 presigned URLs with 1-year expiration"],
c:["A","B"],e:"Combining scoped IAM Policies with restrictive S3 Bucket Policies (e.g., locking access to specific VPC endpoints or roles) enforces strong least-privilege security.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-best-practices.html"},

{d:D,dn:DN,qt:"single",s:"A financial regulator requires that financial report files uploaded to Amazon S3 cannot be overwritten or deleted by any user (including the AWS root user) for 7 years. Which feature fulfills this compliance mandate?",
o:["Amazon S3 Object Lock in Compliance Mode","Amazon S3 Versioning with MFA Delete","S3 Glacier Vault Lock","S3 Bucket Policy Deny Delete"],
c:["A"],e:"S3 Object Lock in Compliance mode prevents object versions from being deleted or overwritten by any user, including the root account user, for the duration of the retention period.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer needs to securely transfer data between an Amazon EC2 instance in a private subnet and an Amazon S3 bucket without traffic leaving the AWS network or crossing the public internet. Which VPC feature should be used?",
o:["Gateway VPC Endpoint for S3","NAT Gateway","Internet Gateway","AWS Direct Connect"],
c:["A"],e:"Gateway VPC Endpoints provide private connectivity from a VPC to Amazon S3 without requiring internet gateways, NAT devices, or public IP addresses.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides an automated security assessment service that scans Amazon EC2 instances and container images in Amazon ECR for software vulnerabilities and network exposure?",
o:["Amazon Inspector","Amazon GuardDuty","AWS Security Hub","AWS Shield"],
c:["A"],e:"Amazon Inspector automatically scans workloads (EC2 instances, ECR container images, Lambda functions) for software vulnerabilities and unintended network exposure.",df:"Standard",u:"https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html"},

{d:D,dn:DN,qt:"single",s:"A security team needs to audit who accessed specific database records in Amazon Redshift over the past 30 days. Which Redshift logging feature captures user queries and connection events?",
o:["Amazon Redshift Database Audit Logging (connection logs, user logs, useractivity logs)","AWS CloudTrail Management Events","Amazon CloudWatch Metrics","VPC Flow Logs"],
c:["A"],e:"Redshift Database Audit Logging captures connection logs, user activity logs, and user query logs, writing them to Amazon S3 for compliance and security auditing.",df:"Standard",u:"https://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to share read-only datasets stored in Amazon Redshift with an external vendor's AWS account securely without extracting or copying files over network links. Which feature enables this?",
o:["Amazon Redshift Data Sharing","AWS Database Migration Service","Amazon S3 Cross-Region Replication","AWS Resource Access Manager (RAM) for S3"],
c:["A"],e:"Amazon Redshift Data Sharing allows instant, granular, and secure data sharing across Redshift clusters and AWS accounts without copying or moving data.",df:"Standard",u:"https://docs.aws.amazon.com/redshift/latest/dg/datashare-overview.html"},
];
