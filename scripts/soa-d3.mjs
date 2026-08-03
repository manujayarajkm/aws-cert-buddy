// SOA-C02 Domain 3: Networking and Cost Optimization (30%)
const D = "soa-d3", DN = "Domain 3: Networking and Cost Optimization";
export default [
{d:D,dn:DN,qt:"single",s:"EC2 instances in a private subnet must connect to the internet to download software updates but must NOT accept any incoming connections from the internet. Which device should be deployed in a public subnet?",
o:["NAT Gateway","Internet Gateway","Egress-Only Internet Gateway","Virtual Private Gateway"],
c:["A"],e:"A NAT Gateway in a public subnet allows instances in private subnets to initiate outbound IPv4 connections to the internet while preventing inbound internet connections.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator needs to connect two VPCs in the same region so resources can communicate using private IP addresses. Network traffic should not traverse the public internet. What feature should be configured?",
o:["VPC Peering","AWS Direct Connect","Internet Gateway","NAT Gateway"],
c:["A"],e:"VPC Peering creates a private network routing connection between two VPCs, allowing instances to communicate directly using private IP addresses.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html"},

{d:D,dn:DN,qt:"single",s:"An organization has 20 VPCs across multiple AWS accounts and on-premises data centers. Connecting every VPC to every other VPC using individual VPC peering links is becoming unmanageable. Which hub-and-spoke networking service simplifies this?",
o:["AWS Transit Gateway","AWS Direct Connect Gateway","AWS PrivateLink","Amazon Route 53 Resolver"],
c:["A"],e:"AWS Transit Gateway acts as a central cloud router (hub) connecting multiple VPCs, AWS accounts, and on-premises networks into a simplified topology.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html"},

{d:D,dn:DN,qt:"single",s:"A company's S3 data transfer out charges to the internet are increasing rapidly. Analysis shows static website assets are requested directly from S3 by millions of users globally. How can the SysOps team reduce data transfer costs while improving load speed?",
o:["Deploy an Amazon CloudFront distribution in front of the S3 bucket","Enable S3 Transfer Acceleration on the bucket","Use S3 Multi-Region Access Points","Increase S3 provisioned IOPS"],
c:["A"],e:"Amazon CloudFront caches assets at edge locations worldwide. Transferring data from S3 to CloudFront is free, and CloudFront egress rates are significantly cheaper than direct S3 egress.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator wants to receive automated email alerts whenever total account spending exceeds 80% of a monthly budget limit of $5,000. Which tool should be configured?",
o:["AWS Budgets","AWS Cost Explorer","AWS Trusted Advisor","AWS Compute Optimizer"],
c:["A"],e:"AWS Budgets allows setting custom cost and usage limits and sending notifications via email or SNS when actual or forecasted spending crosses defined percentage thresholds.",df:"Standard",u:"https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"},

{d:D,dn:DN,qt:"multiple",s:"A SysOps Administrator is looking for specific recommendations to identify idle or underutilized EC2 instances, unattached EBS volumes, and unassociated Elastic IP addresses. Which TWO services/tools provide these checks? (Select TWO.)",
o:["AWS Trusted Advisor","AWS Compute Optimizer","AWS Systems Manager State Manager","AWS CloudTrail","AWS License Manager"],
c:["A","B"],e:"AWS Trusted Advisor flags idle resources (like low utilization EC2 instances and unattached EBS volumes). AWS Compute Optimizer uses ML to recommend optimal instance sizing based on CloudWatch telemetry.",df:"Standard",u:"https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html"},

{d:D,dn:DN,qt:"single",s:"An application running on EC2 calls Amazon S3 APIs. Currently traffic routes out through a NAT Gateway in a public subnet, incurring significant NAT data processing fees. What should be created to eliminate NAT processing charges for S3 traffic?",
o:["S3 Gateway VPC Endpoint","S3 Transfer Acceleration","VPC Peering link","AWS Direct Connect link"],
c:["A"],e:"S3 Gateway VPC Endpoints route VPC traffic to S3 privately and are free of charge, completely eliminating NAT Gateway data processing fees for S3 traffic.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator needs to resolve custom internal domain names (e.g. `app.internal.company.com`) between an on-premises DNS server and Amazon Route 53 Private Hosted Zones in a VPC. Which Route 53 feature enables bidirectional DNS resolution?",
o:["Route 53 Resolver Endpoints (Inbound and Outbound)","Route 53 Traffic Flow","Route 53 Health Checks","Route 53 Latency Routing"],
c:["A"],e:"Route 53 Resolver Inbound Endpoints allow on-prem DNS servers to resolve AWS private domain names, and Outbound Endpoints allow VPC instances to resolve on-prem domain names.",df:"Standard",u:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides an interactive graphical interface for filtering historical cost and usage data by service, linked account, region, or cost allocation tag over the last 12 months?",
o:["AWS Cost Explorer","AWS Budgets","AWS Pricing Calculator","AWS Billing Conductor"],
c:["A"],e:"AWS Cost Explorer provides visualization tools, customizable graphs, and detailed reporting to analyze spending trends over time.",df:"Standard",u:"https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html"},

{d:D,dn:DN,qt:"single",s:"A company has multiple development EC2 instances that only need to run during business hours (Monday-Friday, 8 AM - 6 PM). What is the MOST cost-effective way to manage instance lifecycle?",
o:["Use AWS Instance Scheduler to automatically stop and start instances according to a tag-based schedule","Keep instances running 24/7 with 3-year Reserved Instances","Terminate instances every evening and re-create them via CloudFormation every morning","Convert all instances to Spot Instances"],
c:["A"],e:"AWS Instance Scheduler automatically stops instances outside business hours, saving up to 70% of compute running costs without terminating resources.",df:"Standard",u:"https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/welcome.html"},
];
