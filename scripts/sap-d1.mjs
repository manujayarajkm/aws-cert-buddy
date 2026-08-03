// SAP-C02 Domain 1: Design Complex Organizations (26%)
const D = "sap-d1", DN = "Domain 1: Design Complex Organizations";
export default [
{d:D,dn:DN,qt:"single",s:"A global enterprise with 300 AWS accounts needs to enforce a central security policy that prevents member account root users from terminating AWS Config or CloudTrail across all accounts. What is the MOST effective architecture?",
o:["Apply an Organization-level Service Control Policy (SCP) at the root OU level in AWS Organizations","Create IAM policies in each account and assign them to root","Use AWS Config Rules with Lambda auto-remediation in every account","Deploy an AWS CloudFormation StackSet with local SCPs"],
c:["A"],e:"Service Control Policies (SCPs) in AWS Organizations set maximum permissions for member accounts. SCPs override even root user permissions in member accounts, ensuring central guardrails cannot be bypassed.",df:"Challenging",u:"https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html"},

{d:D,dn:DN,qt:"single",s:"A financial organization requires single sign-on (SSO) for 5,000 workforce users into hundreds of AWS accounts using their existing Active Directory identity provider via SAML 2.0. Which solution minimizes administrative management?",
o:["AWS IAM Identity Center (successor to AWS Single Sign-On) integrated with Active Directory","IAM Users created in each AWS account with trust relationships","Individual IAM Identity Providers configured in every AWS account","AWS Cognito Identity Pools mapped to IAM Roles"],
c:["A"],e:"AWS IAM Identity Center integrates with Active Directory via SAML 2.0 or AWS Directory Service AD Connector. It centrally assigns account access and permission sets across the entire AWS Organization.",df:"Standard",u:"https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise needs to connect 50 VPCs across 5 AWS regions to an on-premises data center connected via a 10 Gbps AWS Direct Connect link. Which architecture provides scalable multi-region routing?",
o:["AWS Transit Gateway in each region connected via Transit Gateway Peering and a Direct Connect Gateway","VPC Peering full mesh between all 50 VPCs and 5 VPN connections","VPC Gateway Endpoints created in each region pointing to Direct Connect","Transit Gateway in us-east-1 only with cross-region VPC peering"],
c:["A"],e:"Direct Connect Gateway attached to regional Transit Gateways (interconnected via Transit Gateway Peering) provides scalable, low-latency multi-region networking between on-prem and all VPCs.",df:"Challenging",u:"https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to audit resource configurations continuously across 100 AWS accounts and aggregate compliance results into a single security operations account. Which service combination provides centralized compliance governance?",
o:["AWS Config Aggregator spanning AWS Organizations with AWS Security Hub","Amazon CloudWatch Logs Subscriptions with Kinesis Data Firehose","AWS CloudTrail Organization Trails with S3 Object Lock","AWS Systems Manager State Manager with SNS"],
c:["A"],e:"An AWS Config Aggregator collects configuration and compliance data across all accounts in an AWS Organization. Security Hub integrates with Config to provide centralized compliance dashboards.",df:"Challenging",u:"https://docs.aws.amazon.com/config/latest/developerguide/aggregate-data.html"},

{d:D,dn:DN,qt:"multiple",s:"A multi-national corporation wants to centralize DNS resolution for private domains (`corp.internal`) between on-premises DNS servers and private hosted zones in 20 AWS VPCs. Which TWO components are required? (Select TWO.)",
o:["Route 53 Resolver Outbound Endpoints with forwarding rules targeting on-premises DNS servers","Route 53 Resolver Inbound Endpoints allowing on-premises DNS servers to query private hosted zones","VPC Peering mesh between all 20 VPCs and on-premises routers","Elastic Load Balancer with UDP listeners on port 53","AWS CloudFront custom origin with DNS rewrite"],
c:["A","B"],e:"Route 53 Resolver Inbound Endpoints allow on-prem DNS to resolve AWS Private Hosted Zones. Outbound Endpoints forward VPC DNS queries for `corp.internal` to on-premises DNS servers.",df:"Challenging",u:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html"},

{d:D,dn:DN,qt:"single",s:"A enterprise software provider wants to share a private microservice API running behind a Network Load Balancer in Account A with thousands of customer AWS accounts securely without exposing traffic over the internet or requiring VPC CIDR overlap resolution. What mechanism should be used?",
o:["AWS PrivateLink (VPC Endpoint Services)","VPC Peering","AWS Site-to-Site VPN","AWS Transit Gateway"],
c:["A"],e:"AWS PrivateLink (VPC Endpoint Service) exposes service endpoints privately across AWS accounts without requiring VPC peering or worrying about overlapping CIDR blocks.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/privatelink/endpoint-service-overview.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to manage centralized IT service catalog templates (CloudFormation products) and govern which AWS products engineering teams can launch across all member accounts. Which service provides this governance?",
o:["AWS Service Catalog","AWS License Manager","AWS Control Tower","AWS OpsWorks"],
c:["A"],e:"AWS Service Catalog allows organizations to create and manage catalogs of approved AWS infrastructure products (CloudFormation stacks) and share them centrally across accounts.",df:"Standard",u:"https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html"},

{d:D,dn:DN,qt:"single",s:"A large enterprise needs to set up a multi-account environment following AWS best practices with automated landing zone setup, mandatory guardrails, and centralized account creation. Which service should be used?",
o:["AWS Control Tower","AWS Organizations only","AWS CloudFormation StackSets","AWS Systems Manager"],
c:["A"],e:"AWS Control Tower provides a managed service to set up and govern a secure, multi-account AWS environment based on AWS landing zone best practices.",df:"Standard",u:"https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html"},

{d:D,dn:DN,qt:"single",s:"A central security team needs to enforce KMS key policies across 50 accounts so that key deletion requests must undergo a 30-day waiting period and generate EventBridge notifications. Which mechanism ensures accounts cannot bypass this?",
o:["AWS Organizations SCP restricting kms:ScheduleKeyDeletion or setting minimum waiting period","AWS KMS default AWS Managed Keys","IAM user policies in member accounts","AWS Secrets Manager policies"],
c:["A"],e:"SCPs in AWS Organizations prevent member accounts from performing restricted KMS actions (like bypassing deletion waiting periods) even if local admins have full IAM rights.",df:"Challenging",u:"https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise uses AWS Organizations with consolidated billing. The CFO wants to allocate AWS charges to specific business units based on custom tag keys like `CostCenter`. What step must be completed in the Master account?",
o:["Activate User-Defined Cost Allocation Tags in the AWS Billing Console","Create separate billing accounts for each business unit","Enable AWS KMS key tagging","Export billing data to S3 via CloudTrail"],
c:["A"],e:"User-defined cost allocation tags must be explicitly activated in the AWS Billing Console (Management account) before they appear in Cost Explorer or AWS Cost and Usage Reports.",df:"Standard",u:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html"},
];
