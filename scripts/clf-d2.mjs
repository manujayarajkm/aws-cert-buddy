// CLF-C02 Domain 2: Security and Compliance (30%) — 20 unique questions
const D = "clf-d2", DN = "Domain 2: Security and Compliance";
export default [
{d:D,dn:DN,qt:"single",s:"Under the AWS Shared Responsibility Model, which of the following is the CUSTOMER'S responsibility?",
o:["Physical security of AWS data centers","Patching the hypervisor software on EC2 host servers","Managing IAM user accounts and their access permissions","Maintaining the global network infrastructure between AWS Regions"],
c:["C"],e:"In the Shared Responsibility Model, AWS manages security OF the cloud (infrastructure, hypervisors, physical data centers), while customers manage security IN the cloud (IAM users/roles, OS patches on EC2 instances, data encryption, security group rules, and application security).",df:"Standard",u:"https://aws.amazon.com/compliance/shared-responsibility-model/"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides centralized management of user identities, authentication, and access permissions across AWS services?",
o:["Amazon Cognito","AWS IAM (Identity and Access Management)","AWS Directory Service","Amazon GuardDuty"],
c:["B"],e:"AWS IAM controls who (authentication) can do what (authorization) in your AWS account. It manages users, groups, roles, and policies. Cognito is for application end-user identity; Directory Service integrates with Microsoft AD; GuardDuty is for threat detection, not identity management.",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to add an extra layer of login security for their AWS root account. What should they enable?",
o:["AWS Shield for DDoS protection","Multi-Factor Authentication (MFA) on the root account","AWS WAF to filter malicious requests","VPC Flow Logs to monitor network access"],
c:["B"],e:"MFA requires a second verification factor (virtual MFA device, hardware token, or security key) beyond the password when signing in. Enabling MFA on the root account is a critical security best practice because the root account has unrestricted access. AWS strongly recommends hardware MFA for root accounts.",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service continuously monitors AWS account activity for malicious behavior and unauthorized access using machine learning and threat intelligence?",
o:["AWS Config","Amazon Inspector","Amazon GuardDuty","AWS Trusted Advisor"],
c:["C"],e:"Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior using ML, anomaly detection, and integrated threat intelligence. It analyzes CloudTrail logs, VPC Flow Logs, and DNS logs. Config tracks resource configuration; Inspector scans for vulnerabilities; Trusted Advisor checks best practices.",df:"Standard",u:"https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html"},

{d:D,dn:DN,qt:"multiple",s:"Which TWO practices are AWS security best practices for IAM? (Select TWO.)",
o:["Grant least privilege — give users only the permissions they need","Enable MFA for all human users, especially privileged accounts","Use the root account for daily administrative tasks","Share IAM credentials among team members for convenience","Embed access keys directly in application source code"],
c:["A","B"],e:"Least privilege ensures users can only access what they need, limiting blast radius if credentials are compromised. MFA adds a second authentication factor, dramatically reducing unauthorized access risk. Root should be used only for account-level tasks, credentials should never be shared, and access keys should never be in source code.",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to encrypt data stored in Amazon S3. Which service manages encryption keys and provides a centralized key management solution?",
o:["AWS Certificate Manager (ACM)","AWS Key Management Service (KMS)","AWS Secrets Manager","AWS CloudHSM"],
c:["B"],e:"AWS KMS creates and manages cryptographic keys used to encrypt data across AWS services (S3, EBS, RDS, etc.). KMS integrates natively with 100+ AWS services. ACM manages SSL/TLS certificates; Secrets Manager stores passwords/API keys; CloudHSM provides dedicated hardware security modules for strict compliance.",df:"Standard",u:"https://docs.aws.amazon.com/kms/latest/developerguide/overview.html"},

{d:D,dn:DN,qt:"single",s:"Under the Shared Responsibility Model, which of the following is AWS's responsibility?",
o:["Configuring security group rules for EC2 instances","Patching the guest operating system on EC2 instances","Physical security of the data centers hosting AWS infrastructure","Encrypting customer data stored in S3 buckets"],
c:["C"],e:"AWS is responsible for security OF the cloud: physical data center security, hardware maintenance, network infrastructure, and hypervisor patching. Customers handle security group rules, OS patching, and data encryption choices. This division is fundamental to understanding cloud security.",df:"Standard",u:"https://aws.amazon.com/compliance/shared-responsibility-model/"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides a firewall to protect web applications from common exploits like SQL injection, cross-site scripting, and bot attacks?",
o:["AWS Shield","AWS WAF (Web Application Firewall)","Security Groups","Network ACLs"],
c:["B"],e:"AWS WAF protects web applications by filtering HTTP/HTTPS requests based on customizable rules. It blocks SQL injection, XSS, and other OWASP Top 10 attacks. Shield protects against DDoS; Security Groups are instance-level firewalls; NACLs are subnet-level stateless firewalls—none inspect application-layer content.",df:"Standard",u:"https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to meet compliance requirements and wants to download AWS audit reports, certifications, and compliance documentation (SOC, PCI, ISO). Which service provides these?",
o:["AWS Trusted Advisor","AWS Artifact","AWS Config","AWS Security Hub"],
c:["B"],e:"AWS Artifact is a self-service portal for accessing AWS compliance reports and documentation, including SOC reports, PCI DSS attestation, ISO certifications, and HIPAA documentation. These are official third-party audit reports. Trusted Advisor checks best practices; Config tracks resource compliance; Security Hub aggregates security findings.",df:"Standard",u:"https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html"},

{d:D,dn:DN,qt:"single",s:"Which feature allows you to control inbound and outbound network traffic to Amazon EC2 instances?",
o:["IAM policies","Security Groups","AWS WAF rules","S3 bucket policies"],
c:["B"],e:"Security Groups act as virtual firewalls for EC2 instances, controlling inbound and outbound traffic at the instance level. They are stateful (return traffic is automatically allowed). IAM policies control API permissions; WAF protects web apps; S3 bucket policies control S3 access—none directly control EC2 network traffic.",df:"Standard",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html"},

{d:D,dn:DN,qt:"multiple",s:"Which TWO tasks are the customer's responsibility under the AWS Shared Responsibility Model? (Select TWO.)",
o:["Configuring operating system firewalls and patching the guest OS on EC2","Encrypting application data before storing it in AWS services","Replacing faulty hardware disks in AWS data centers","Securing the physical network cables between Availability Zones","Patching the firmware on AWS storage devices"],
c:["A","B"],e:"Customers are responsible for managing their guest OS (updates, patches, firewall configuration) and protecting their data (encryption, access controls, backup strategies). AWS handles all physical infrastructure: hardware replacement, network cabling, and firmware patching.",df:"Standard",u:"https://aws.amazon.com/compliance/shared-responsibility-model/"},

{d:D,dn:DN,qt:"single",s:"An application team wants to grant their EC2 instances access to S3 and DynamoDB without storing access keys on the instances. What should they use?",
o:["IAM user with programmatic access keys stored in environment variables","IAM role attached to the EC2 instance via an instance profile","Root account credentials with restricted permissions","Security group rules allowing outbound traffic to S3 and DynamoDB"],
c:["B"],e:"IAM roles provide temporary, automatically-rotated credentials to EC2 instances through the instance metadata service. This is more secure than storing long-term access keys. The instance profile links the role to the instance. Security groups control network traffic, not API authorization.",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service records all API calls made in an AWS account for auditing and compliance purposes?",
o:["Amazon CloudWatch","AWS CloudTrail","AWS Config","VPC Flow Logs"],
c:["B"],e:"AWS CloudTrail logs every API call made in your account — who made it, when, from where, and what was changed. This creates an audit trail essential for compliance, forensic investigation, and operational troubleshooting. CloudWatch monitors metrics/logs; Config tracks resource state; Flow Logs capture network traffic.",df:"Standard",u:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"},

{d:D,dn:DN,qt:"single",s:"What is the principle of least privilege in the context of AWS IAM?",
o:["Granting all users full administrator access for maximum productivity","Granting users only the minimum permissions they need to perform their specific job functions","Creating a single shared IAM account for the entire team","Applying the same permissions to all users regardless of their role"],
c:["B"],e:"Least privilege means granting only the exact permissions required for a task—nothing more. This limits the potential damage from compromised credentials, accidental actions, or insider threats. Start with no permissions and add only what's needed. Regular access reviews help maintain least privilege over time.",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege"},

{d:D,dn:DN,qt:"single",s:"A company needs to enforce password complexity requirements and mandatory password rotation for all IAM users. Which IAM feature should they configure?",
o:["IAM access keys rotation policy","IAM password policy with minimum length, complexity, and rotation requirements","Multi-factor authentication settings","IAM permissions boundary"],
c:["B"],e:"IAM password policies define requirements for IAM user passwords: minimum length, character requirements (uppercase, lowercase, numbers, symbols), password expiration period, and reuse prevention. This is separate from MFA (which adds a second factor) and access key rotation (which applies to programmatic access).",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service helps centrally view and manage security alerts and compliance status across multiple AWS accounts?",
o:["Amazon Macie","AWS Security Hub","Amazon Detective","AWS Audit Manager"],
c:["B"],e:"AWS Security Hub aggregates security findings from multiple AWS services (GuardDuty, Inspector, Macie, Firewall Manager, IAM Access Analyzer) and third-party tools into a single dashboard. It provides compliance checks against standards like CIS Benchmarks and PCI DSS. Macie focuses on data classification; Detective investigates findings; Audit Manager helps with audit preparation.",df:"Standard",u:"https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html"},

{d:D,dn:DN,qt:"single",s:"Which type of AWS service helps protect against Distributed Denial of Service (DDoS) attacks?",
o:["AWS Shield (Standard and Advanced)","AWS IAM","Amazon Inspector","AWS Config"],
c:["A"],e:"AWS Shield provides DDoS protection. Shield Standard is free and automatically protects all AWS customers against common layer 3/4 attacks. Shield Advanced ($3,000/month) provides enhanced protection for ELB, CloudFront, Route 53, and Global Accelerator, plus 24/7 DDoS Response Team (DRT) access and cost protection.",df:"Standard",u:"https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to know which AWS compliance programs and certifications apply to specific AWS services in their region. Where can they find this information?",
o:["AWS Trusted Advisor dashboard","AWS Artifact for compliance reports and the AWS Services in Scope page","AWS Personal Health Dashboard","AWS Support Center"],
c:["B"],e:"AWS Artifact provides on-demand access to compliance reports (SOC, PCI, ISO), and the AWS Services in Scope page lists exactly which services are covered under each compliance program by region. This is the authoritative source for compliance certification information.",df:"Standard",u:"https://aws.amazon.com/compliance/services-in-scope/"},

{d:D,dn:DN,qt:"single",s:"An administrator accidentally deleted an important IAM policy. Which AWS service would help them identify when the deletion occurred and who performed the action?",
o:["Amazon CloudWatch Logs","AWS CloudTrail event history","AWS Config resource timeline","Amazon GuardDuty findings"],
c:["B"],e:"CloudTrail records all IAM API calls, including DeletePolicy. By searching the CloudTrail event history, the administrator can find the exact timestamp, the IAM identity that made the call, the source IP address, and the request parameters. CloudWatch monitors performance metrics; Config tracks resource state changes; GuardDuty detects threats.",df:"Standard",u:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to encrypt an Amazon RDS database. When should encryption be enabled?",
o:["Encryption can be enabled or disabled at any time on an existing database","Encryption must be enabled when the RDS instance is first created","Encryption is automatically enabled by default and cannot be disabled","Encryption only applies to the data in transit, not data at rest"],
c:["B"],e:"RDS encryption at rest must be enabled at database creation time — it cannot be added to an existing unencrypted instance. To encrypt an existing database, you must create an encrypted snapshot copy and restore from it. RDS encryption uses KMS and covers storage, backups, replicas, and snapshots.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html"},
];
