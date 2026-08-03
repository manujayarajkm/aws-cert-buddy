// SCS-C02 Domain 2: IAM, Data Protection & Governance (50%)
const D = "scs-d2", DN = "Domain 2: IAM, Data Protection & Governance";
export default [
{d:D,dn:DN,qt:"single",s:"A security team needs to enforce that developers cannot grant permissions beyond a defined boundary when creating new IAM roles. Which IAM feature restricts maximum achievable permissions?",
o:["IAM Permissions Boundaries","IAM Identity Center Permission Sets","AWS Organizations SCP","IAM Resource Policies"],
c:["A"],e:"IAM Permissions Boundaries define the maximum permissions that an identity-based policy can grant to an IAM entity, preventing privilege escalation.",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html"},

{d:D,dn:DN,qt:"single",s:"An S3 bucket contains sensitive health records. The compliance team mandates that objects must be encrypted at rest using keys where key access generates audit logs in CloudTrail and key usage can be revoked. Which encryption mechanism fulfills this?",
o:["Server-Side Encryption with Customer Managed KMS Keys (SSE-KMS)","Server-Side Encryption with Amazon S3 Managed Keys (SSE-S3)","Client-Side Encryption with plaintext S3","Bucket Access Control Lists"],
c:["A"],e:"SSE-KMS using Customer Managed Keys (CMKs) provides granular key policies, automatic rotation options, and audit logging in AWS CloudTrail for every encrypt/decrypt request.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html"},

{d:D,dn:DN,qt:"single",s:"A security engineer needs to analyze IAM policies across an AWS account to identify public or cross-account access granted to S3 buckets, KMS keys, or SQS queues. Which IAM feature provides this analysis?",
o:["IAM Access Analyzer","IAM Policy Simulator","AWS Trusted Advisor","AWS Systems Manager"],
c:["A"],e:"IAM Access Analyzer uses automated reasoning to analyze resource-based policies and identify resources shared externally outside the zone of trust.",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to discover and classify PII (Personally Identifiable Information) stored across hundreds of S3 buckets and alert when sensitive data is unencrypted. Which service fulfills this?",
o:["Amazon Macie","Amazon GuardDuty","AWS Security Hub","Amazon Inspector"],
c:["A"],e:"Amazon Macie uses machine learning and pattern matching to automatically discover, classify, and protect sensitive data (PII, financial data) in Amazon S3.",df:"Standard",u:"https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html"},

{d:D,dn:DN,qt:"single",s:"A security audit requires verifying that CloudTrail log files saved in S3 have not been deleted, modified, or forged since creation. Which feature provides cryptographic validation?",
o:["CloudTrail Log File Integrity Validation","S3 Object Lock in Governance Mode","S3 Versioning","AWS KMS SSE-S3"],
c:["A"],e:"CloudTrail Log File Integrity Validation uses cryptographic hashes (SHA-256) and digital signatures (RSA) to prove log files were not modified or deleted.",df:"Standard",u:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html"},

{d:D,dn:DN,qt:"multiple",s:"A company needs to prevent any employee (including AWS Account Admins) from deleting compliance audit logs stored in an S3 bucket for 5 years. Which TWO settings ensure immutability? (Select TWO.)",
o:["Amazon S3 Object Lock in Compliance Mode","S3 Bucket Policy denying s3:DeleteObject and s3:DeleteObjectVersion","S3 Intelligent Tiering","S3 Transfer Acceleration","AWS KMS default key encryption"],
c:["A","B"],e:"S3 Object Lock in Compliance mode combined with restrictive bucket policies ensures no user—including root—can delete objects before the retention period expires.",df:"Challenging",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html"},

{d:D,dn:DN,qt:"single",s:"A security team needs to enforce SSL/TLS encryption for all data in transit to an S3 bucket. Which bucket policy condition rejects non-HTTPS requests?",
o:["Bucket Policy with Deny effect when `aws:SecureTransport` is false","Bucket Policy with Allow effect when `aws:CurrentTime` is set","IAM policy with `aws:MultiFactorAuthPresent`","S3 Block Public Access"],
c:["A"],e:"The aws:SecureTransport condition key evaluates to false if a request is sent over HTTP rather than HTTPS. A Deny policy with aws:SecureTransport: false enforces TLS.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-2"},

{d:D,dn:DN,qt:"single",s:"An organization uses AWS Organizations. The security administrator wants to prevent any user in member accounts from leaving the organization or disabling GuardDuty. Which policy type enforces this?",
o:["Service Control Policy (SCP)","IAM Group Policy","S3 Bucket Policy","AWS KMS Key Policy"],
c:["A"],e:"Service Control Policies (SCPs) define maximum allowed permissions across accounts in an AWS Organization, overriding member account administrator privileges.",df:"Standard",u:"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to store database credentials securely and rotate them automatically every 30 days without updating application code. Which service handles secret management and automated rotation?",
o:["AWS Secrets Manager","AWS Systems Manager Parameter Store (Standard)","Amazon S3 encrypted with SSE-S3","AWS KMS"],
c:["A"],e:"AWS Secrets Manager manages, rotates, and retrieves database credentials, API keys, and OAuth tokens securely using integrated Lambda rotation functions.",df:"Standard",u:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},

{d:D,dn:DN,qt:"single",s:"A security engineer needs to aggregate security findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer across 50 accounts into a single dashboard. Which service acts as the central security management hub?",
o:["AWS Security Hub","AWS Systems Manager Explorer","AWS Config Aggregator","AWS Trusted Advisor"],
c:["A"],e:"AWS Security Hub aggregates, organizes, and prioritizes security findings from multiple AWS security services and third-party products across AWS accounts.",df:"Standard",u:"https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html"},
];
