// SOA-C02 Domain 2: Reliability, Automation, and Security (50%)
const D = "soa-d2", DN = "Domain 2: Reliability, Automation, and Security";
export default [
{d:D,dn:DN,qt:"single",s:"A SysOps Administrator needs to automate OS security patching across a fleet of 200 EC2 instances without logging into instances manually. Which AWS Systems Manager feature handles scheduled patch baselines?",
o:["AWS Systems Manager Patch Manager","AWS Systems Manager Run Command","AWS Systems Manager Session Manager","AWS Systems Manager Parameter Store"],
c:["A"],e:"Patch Manager automates the process of patching managed instances with security-related updates and custom patch baselines according to defined maintenance windows.",df:"Standard",u:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html"},

{d:D,dn:DN,qt:"single",s:"An EC2 instance in a private subnet requires SSH administrative access. Security policies strictly prohibit opening port 22 in security groups or assigning public IP addresses. How can the SysOps Administrator connect securely?",
o:["AWS Systems Manager Session Manager","EC2 Instance Connect with Public IP","Bastion Host in Public Subnet with open port 22","Direct Connect with SSH key injection"],
c:["A"],e:"SSM Session Manager provides secure one-click shell access to EC2 instances via the SSM Agent over HTTPS without opening inbound SSH ports or requiring public IPs.",df:"Standard",u:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps team manages an AWS Auto Scaling group. They want to ensure that newly launched EC2 instances complete all application initialization scripts (bootstrapping) before receiving web traffic from an Application Load Balancer. What should be configured?",
o:["Auto Scaling Lifecycle Hooks","Auto Scaling Target Tracking Policy","EC2 Status Checks","ELB Connection Draining"],
c:["A"],e:"Auto Scaling Lifecycle hooks pause an instance after launch (Pending:Wait state) so custom setup scripts can complete before the instance enters service and receives ELB traffic.",df:"Standard",u:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to create an exact backup snapshot of an Amazon EBS volume connected to an EC2 instance every night at 2 AM and retain snapshots for 30 days automatically. Which service automates this?",
o:["Amazon Data Lifecycle Manager (Amazon DLM)","AWS Backup","AWS Systems Manager Maintenance Windows","AWS CloudFormation StackSets"],
c:["A"],e:"Amazon Data Lifecycle Manager (DLM) provides a simple, automated way to create, retain, and delete EBS volume snapshots and EBS-backed AMIs according to a policy schedule.",df:"Standard",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator needs to back up resources across multiple AWS accounts and regions (EBS, RDS, DynamoDB, S3) into a central backup vault with immutable compliance WORM policies. Which service should be configured?",
o:["AWS Backup with Backup Vault Lock","AWS DataSync","Amazon Data Lifecycle Manager","AWS Organizations SCP"],
c:["A"],e:"AWS Backup is a centralized backup service that supports cross-account, cross-region backups and vault locking (WORM - Write Once Read Many) to prevent backup deletion.",df:"Standard",u:"https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html"},

{d:D,dn:DN,qt:"multiple",s:"A SysOps Administrator is configuring an AWS CloudFormation template to deploy an EC2 infrastructure stack across 10 AWS accounts in 3 regions. Which feature of CloudFormation supports multi-account, multi-region deployments? (Select TWO.)",
o:["AWS CloudFormation StackSets","AWS IAM administrative execution roles in target accounts","AWS CloudFormation Drift Detection","AWS CodeDeploy Agent","AWS Systems Manager State Manager"],
c:["A","B"],e:"AWS CloudFormation StackSets enables creating, updating, or deleting stacks across multiple AWS accounts and regions in a single operation using administrative execution roles.",df:"Standard",u:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html"},

{d:D,dn:DN,qt:"single",s:"A company's S3 bucket policy was modified by an unauthorized user. The SysOps team wants to detect when a CloudFormation stack's actual infrastructure state differs from its template definition. Which feature detects this drift?",
o:["CloudFormation Drift Detection","CloudFormation Rollback","CloudFormation StackSets","AWS Config Conformance Packs"],
c:["A"],e:"CloudFormation Drift Detection identifies resources that have undergone manual property changes outside of CloudFormation template management.",df:"Standard",u:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html"},

{d:D,dn:DN,qt:"single",s:"An Application Load Balancer target group marks all EC2 instances as unhealthy. What is the FIRST thing the SysOps Administrator should check?",
o:["Verify that security group rules allow traffic on the health check port from the ALB security group","Check whether S3 bucket public access block is enabled","Upgrade the EC2 instance type to a larger instance size","Re-create the VPC internet gateway"],
c:["A"],e:"Unhealthy target group status is most commonly caused by misconfigured security groups or NACLs blocking health check requests between the load balancer and instances.",df:"Standard",u:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-troubleshooting.html#target-subsystem-response"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator needs to enforce strict password complexity, rotation every 90 days, and prevent reuse of the last 5 passwords for IAM users across an account. Where is this enforced?",
o:["IAM Account Password Policy","AWS Organizations SCP","AWS Systems Manager Parameter Store","IAM Identity Center Permission Set"],
c:["A"],e:"The IAM Account Password Policy sets requirements for IAM user passwords, including length, character types, expiration period, and history prevention.",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html"},

{d:D,dn:DN,qt:"single",s:"An administrator needs to execute a single shell command across 50 EC2 instances simultaneously without logging into each instance individually via SSH. Which Systems Manager feature should be used?",
o:["AWS Systems Manager Run Command","AWS Systems Manager Session Manager","AWS Systems Manager Patch Manager","AWS Systems Manager Distributor"],
c:["A"],e:"Run Command allows on-demand remote management of EC2 instances at scale without requiring open inbound ports or SSH key management.",df:"Standard",u:"https://docs.aws.amazon.com/systems-manager/latest/userguide/execute-remote-commands.html"},
];
