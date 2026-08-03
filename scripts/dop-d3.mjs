// DOP-C02 Domain 3: Security, Compliance, and Incident Response (31%)
const D = "dop-d3", DN = "Domain 3: Security, Compliance, and Incident Response";
export default [
{d:D,dn:DN,qt:"single",s:"A DevOps engineer needs to enforce a compliance requirement that no S3 buckets across an organization can have public read or write permissions. Which service combination detects and automatically fixes public S3 buckets?",
o:["AWS Config Rules with AWS Systems Manager Automation remediation","Amazon Inspector with EC2 Agent","AWS Trusted Advisor with email notifications","AWS Shield Advanced"],
c:["A"],e:"AWS Config continuously evaluates S3 bucket configurations against rules (like `s3-bucket-public-read-prohibited`) and can trigger automatic SSM Automation runbooks to revoke public access.",df:"Standard",u:"https://docs.aws.amazon.com/config/latest/developerguide/remediation.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise security team requires that all Secrets Manager database credentials be rotated automatically every 30 days. What AWS resource performs the underlying secret rotation logic?",
o:["AWS Lambda function created specifically for secret rotation","AWS Systems Manager State Manager","AWS Config Rule","AWS CodeBuild project"],
c:["A"],e:"AWS Secrets Manager relies on an AWS Lambda function to execute the custom or built-in database password rotation logic (updating both the database and the secret value).",df:"Standard",u:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html"},

{d:D,dn:DN,qt:"single",s:"A security team detects an compromised IAM access key used by a developer. The DevOps incident responder must immediately invalidate all active sessions for that IAM user. Which IAM action achieves this?",
o:["Attach an inline IAM policy denying all actions with a condition checking `aws:TokenIssueTime` before the revocation timestamp","Delete the S3 bucket policies in the account","Disable VPC Flow Logs","Re-create the AWS Organization root account"],
c:["A"],e:"Revoking active IAM user sessions requires attaching a policy that denies all API requests where `aws:TokenIssueTime` is earlier than the revocation timestamp, invalidating existing temporary credentials.",df:"Challenging",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_revoke-tokens.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps team needs to aggregate security findings from GuardDuty, Inspector, Macie, and IAM Access Analyzer across 100 accounts into a single dashboard. Which service acts as the central security management hub?",
o:["AWS Security Hub","AWS Trusted Advisor","AWS Systems Manager OpsCenter","AWS Shield Advanced"],
c:["A"],e:"AWS Security Hub aggregates, organizes, and prioritizes security findings from multiple AWS security services and third-party partner products across AWS Organizations.",df:"Standard",u:"https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html"},

{d:D,dn:DN,qt:"single",s:"An application running on EC2 instances needs to access Secrets Manager. Security mandates that credentials must not be stored on disk and network traffic must not traverse the public internet. Which configuration satisfies this?",
o:["Attach an IAM Instance Profile to the EC2 instance and create a Secrets Manager Interface VPC Endpoint (AWS PrivateLink)","Hardcode credentials in environment variables over NAT Gateway","Use AWS STS AssumeRole with public IP endpoints","Store credentials in plaintext in S3"],
c:["A"],e:"IAM instance profiles provide temporary credentials in memory, and VPC Interface Endpoints (PrivateLink) keep API traffic strictly within the AWS private network.",df:"Standard",u:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/vpc-endpoint-overview.html"},

{d:D,dn:DN,qt:"multiple",s:"A DevOps incident responder wants to automate operational response when GuardDuty detects a High Severity finding (such as a compromised EC2 instance communicating with a C2 server). Which TWO services orchestrate automated isolation? (Select TWO.)",
o:["Amazon EventBridge to catch GuardDuty findings","AWS Systems Manager Automation or Lambda to detach IAM roles and isolate EC2 security groups","Amazon CloudFront CDN invalidation","AWS Storage Gateway snapshot upload","AWS CodeArtifact repository publish"],
c:["A","B"],e:"GuardDuty publishes findings to EventBridge. An EventBridge rule can trigger a Lambda function or SSM Automation runbook to modify the EC2 instance's security group and isolate it.",df:"Challenging",u:"https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_remediating.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps engineer wants to ensure that CloudTrail log files delivered to an S3 bucket have not been tampered with, deleted, or modified after delivery. Which CloudTrail feature provides cryptographic proof of log integrity?",
o:["CloudTrail Log File Integrity Validation","CloudTrail Organization Trails","S3 Versioning","AWS KMS SSE-S3"],
c:["A"],e:"CloudTrail Log File Integrity Validation generates SHA-256 digital signatures and RSA hashes for log files, allowing cryptographic validation that logs were unaltered.",df:"Standard",u:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to audit open security group rules across 50 accounts to ensure port 22 (SSH) and port 3389 (RDP) are not open to 0.0.0.0/0. Which AWS service provides pre-built rules and managed conformance packs?",
o:["AWS Config Conformance Packs","AWS Systems Manager Distributor","AWS CloudFormation StackSets","AWS CodePipeline"],
c:["A"],e:"AWS Config Conformance Packs bundle AWS Config rules and remediation actions into a single deployment package across an entire AWS Organization.",df:"Standard",u:"https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps team needs to collect operational issues (OpsItems) across AWS resources and manage incident resolution workflows in a centralized console. Which Systems Manager tool handles operational issue tracking?",
o:["AWS Systems Manager OpsCenter","AWS Systems Manager Explorer","AWS Systems Manager Change Manager","AWS Systems Manager Patch Manager"],
c:["A"],e:"Systems Manager OpsCenter provides a central location where operations engineers and DevOps teams view, investigate, and resolve operational issues (OpsItems) related to AWS resources.",df:"Standard",u:"https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to manage formal operational change requests (such as approving maintenance window deployments) with multi-level manager approvals and audit trails. Which Systems Manager feature handles change governance?",
o:["AWS Systems Manager Change Manager","AWS Systems Manager Run Command","AWS Systems Manager Parameter Store","AWS Systems Manager Session Manager"],
c:["A"],e:"Systems Manager Change Manager simplifies how you request, approve, implement, and report on operational changes to application infrastructure across AWS accounts.",df:"Standard",u:"https://docs.aws.amazon.com/systems-manager/latest/userguide/change-manager.html"},
];
