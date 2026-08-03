// SCS-C02 Domain 1: Threat Detection & Infrastructure Security (50%)
const D = "scs-d1", DN = "Domain 1: Threat Detection & Infrastructure Security";
export default [
{d:D,dn:DN,qt:"single",s:"A security team detects an EC2 instance making unexpected outbound connection attempts to known malicious IP addresses. Which service automatically detects compromised instances using threat intelligence and VPC Flow Logs analysis?",
o:["Amazon GuardDuty","AWS WAF","Amazon Inspector","AWS Security Hub"],
c:["A"],e:"Amazon GuardDuty uses machine learning, anomaly detection, and threat intelligence (like malicious IP feeds) to monitor VPC Flow Logs, DNS logs, and CloudTrail for compromised instances.",df:"Standard",u:"https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to block SQL injection and Cross-Site Scripting (XSS) attacks on an Application Load Balancer facing the internet. Which service provides rule-based layer 7 inspection?",
o:["AWS WAF (Web Application Firewall)","AWS Shield Standard","Security Groups","Network ACLs"],
c:["A"],e:"AWS WAF operates at Layer 7 to inspect HTTP/HTTPS payloads, blocking OWASP Top 10 vulnerabilities including SQL injection and XSS.",df:"Standard",u:"https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html"},

{d:D,dn:DN,qt:"single",s:"A financial application requires blocking incoming HTTP requests from specific geographic countries. How can this be accomplished on an Application Load Balancer?",
o:["Configure AWS WAF Geo Match rules attached to the ALB","Use Security Groups with Geo-IP CIDR ranges","Use Network ACLs with domain names","Configure Route 53 Geolocation routing with null targets"],
c:["A"],e:"AWS WAF Geo match statement allows blocking or allowing requests based on the country of origin derived from the client IP address.",df:"Standard",u:"https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html"},

{d:D,dn:DN,qt:"single",s:"A company needs dedicated hardware security modules (HSMs) in their VPC that meet FIPS 140-2 Level 3 compliance where the customer maintains exclusive control over cryptographic keys. Which service should be used?",
o:["AWS CloudHSM","AWS Key Management Service (KMS)","AWS Secrets Manager","AWS Certificate Manager"],
c:["A"],e:"AWS CloudHSM provides dedicated single-tenant FIPS 140-2 Level 3 hardware security modules where customers retain sole management control of key material.",df:"Challenging",u:"https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html"},

{d:D,dn:DN,qt:"multiple",s:"A security team wants to protect their infrastructure against large-scale layer 3/4 SYN floods and UDP reflection DDoS attacks. Which TWO services provide automatic DDoS mitigation? (Select TWO.)",
o:["AWS Shield Standard (included by default for all AWS customers)","AWS Shield Advanced with 24/7 Shield Response Team (SRT) support","AWS Config Conformance Packs","Amazon Inspector vulnerability scanning","AWS CodeArtifact"],
c:["A","B"],e:"AWS Shield Standard automatically mitigates common network/transport layer DDoS attacks. Shield Advanced adds enhanced protection, cost protection, and 24/7 SRT support.",df:"Standard",u:"https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise security officer needs to inspect software packages installed on EC2 instances and ECR container images for known Common Vulnerabilities and Exposures (CVEs). Which service provides automated vulnerability management?",
o:["Amazon Inspector","Amazon GuardDuty","AWS Security Hub","AWS Systems Manager State Manager"],
c:["A"],e:"Amazon Inspector automatically scans EC2 instances, ECR container images, and Lambda functions for software vulnerabilities (CVEs) and unintended network exposure.",df:"Standard",u:"https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html"},

{d:D,dn:DN,qt:"single",s:"A security team wants to isolate a compromised EC2 instance immediately after GuardDuty generates a High severity finding. Which service pattern automates this isolation?",
o:["EventBridge Rule catching GuardDuty finding -> AWS Lambda function modifying Security Group to deny all ingress/egress","CloudWatch Alarms modifying NACLs","S3 Lifecycle policy deleting instance volumes","AWS Systems Manager Patch Manager"],
c:["A"],e:"GuardDuty sends findings to EventBridge. EventBridge triggers a Lambda function that swaps the compromised EC2 instance's security group to an isolation security group with no inbound/outbound rules.",df:"Challenging",u:"https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_remediating.html"},

{d:D,dn:DN,qt:"single",s:"Which network security device in a VPC is stateless, operates at the subnet level, and processes rules in numerical order to evaluate inbound and outbound traffic?",
o:["Network Access Control List (NACL)","Security Group","AWS WAF","Route Table"],
c:["A"],e:"Network ACLs (NACLs) are stateless subnet-level firewalls that evaluate inbound and outbound traffic using numbered rules sequentially.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html"},

{d:D,dn:DN,qt:"single",s:"Which network security boundary in a VPC is stateful, operates at the instance/ENI level, and implicitly denies all inbound traffic by default unless explicitly allowed?",
o:["Security Group","Network ACL (NACL)","AWS Network Firewall","Internet Gateway"],
c:["A"],e:"Security Groups act as stateful virtual firewalls attached directly to Elastic Network Interfaces (ENIs). Inbound traffic is denied by default unless an allow rule is present.",df:"Standard",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html"},

{d:D,dn:DN,qt:"single",s:"A security engineer needs to deploy deep packet inspection (DPI) with stateful domain filtering and intrusion prevention system (IPS) rules across all VPC subnets. Which service should be used?",
o:["AWS Network Firewall","AWS WAF","Security Groups","VPC Flow Logs"],
c:["A"],e:"AWS Network Firewall is a managed network firewall service providing stateful inspection, intrusion prevention (IPS), and web filtering for entire VPCs.",df:"Challenging",u:"https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html"},
];
