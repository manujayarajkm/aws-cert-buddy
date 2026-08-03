// CLF-C02 Domain 4: Billing, Pricing, and Support (12%) — 10 unique questions
const D = "clf-d4", DN = "Domain 4: Billing, Pricing, and Support";
export default [
{d:D,dn:DN,qt:"single",s:"A company wants to receive automated email alerts when their monthly AWS spending is forecasted to exceed $10,000. Which service should they use?",
o:["AWS Cost Explorer for visualizing historical spending trends","AWS Budgets with email alerts configured at the $10,000 threshold","AWS Trusted Advisor for cost optimization recommendations","AWS Pricing Calculator for estimating future costs"],
c:["B"],e:"AWS Budgets lets you set custom cost or usage thresholds and receive alerts via email or SNS when actual or forecasted spending exceeds them. You can set monthly, quarterly, or annual budget periods. Cost Explorer shows historical data; Trusted Advisor recommends savings; Pricing Calculator estimates hypothetical costs.",df:"Standard",u:"https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS support plan provides access to a dedicated Technical Account Manager (TAM) and Infrastructure Event Management?",
o:["Basic Support (free)","Developer Support","Business Support","Enterprise Support"],
c:["D"],e:"Enterprise Support ($15,000+/month) includes a dedicated TAM who provides proactive guidance, Infrastructure Event Management for launch planning, Concierge Support for billing, and <15-minute response for critical issues. Business Support has 24/7 phone/chat but no TAM. Developer provides business-hours email support only.",df:"Standard",u:"https://aws.amazon.com/premiumsupport/plans/"},

{d:D,dn:DN,qt:"single",s:"Which EC2 pricing model provides the LOWEST cost for workloads that can tolerate interruptions?",
o:["On-Demand Instances — pay by the hour with no commitment","Reserved Instances — 1 or 3-year commitment for steady workloads","Spot Instances — up to 90% discount for interruptible workloads","Dedicated Hosts — physical servers dedicated to your use"],
c:["C"],e:"Spot Instances offer up to 90% discount compared to On-Demand by using spare EC2 capacity. AWS can reclaim Spot Instances with a 2-minute warning, making them ideal for fault-tolerant workloads like batch processing, CI/CD, and data analysis. On-Demand has no discount; Reserved Instances require commitment but guarantee availability.",df:"Standard",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html"},

{d:D,dn:DN,qt:"single",s:"A large organization with multiple AWS accounts wants to receive a single consolidated bill and share volume pricing discounts across all accounts. Which feature enables this?",
o:["AWS Cost Explorer with linked account filtering","AWS Organizations with consolidated billing","AWS Budgets with multi-account tracking","IAM cross-account billing access"],
c:["B"],e:"AWS Organizations consolidated billing combines usage across all member accounts into a single bill. This aggregates usage for volume pricing tiers (e.g., S3 and EC2), enabling the organization to reach higher discount tiers faster. Reserved Instance and Savings Plan benefits can be shared across accounts.",df:"Standard",u:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"},

{d:D,dn:DN,qt:"multiple",s:"Which TWO AWS tools help a company understand and manage their AWS costs? (Select TWO.)",
o:["AWS Cost Explorer for visualizing, understanding, and analyzing spending patterns over time","AWS Budgets for setting spending limits and receiving proactive alerts","Amazon CloudWatch for monitoring resource performance metrics","AWS CloudFormation for provisioning infrastructure as code","Amazon Inspector for security vulnerability scanning"],
c:["A","B"],e:"Cost Explorer provides interactive graphs and reports to analyze cost and usage data, filter by service/account/tag, and identify trends. Budgets lets you set custom spending thresholds and receive automated alerts. CloudWatch monitors performance metrics; CloudFormation provisions resources; Inspector finds security vulnerabilities.",df:"Standard",u:"https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides personalized recommendations to reduce costs, improve performance, and address security gaps based on AWS best practices?",
o:["AWS Config","AWS Systems Manager","AWS Trusted Advisor","AWS Well-Architected Tool"],
c:["C"],e:"AWS Trusted Advisor inspects your AWS environment and makes recommendations across five categories: cost optimization, performance, security, fault tolerance, and service limits. Business and Enterprise Support plans unlock all checks. Config tracks compliance; Systems Manager manages operations; Well-Architected Tool reviews architectures.",df:"Standard",u:"https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to commit to a consistent amount of compute usage (measured in $/hr) in exchange for lower prices, but wants flexibility to change instance families, sizes, or regions. Which pricing option fits this need?",
o:["Standard Reserved Instances locked to a specific instance type","Compute Savings Plans with flexible application across EC2, Fargate, and Lambda","Spot Instances for surplus capacity","On-Demand pricing with no commitment"],
c:["B"],e:"Compute Savings Plans provide up to 66% savings on a $/hr commitment that applies automatically to any EC2 instance (any family, size, OS, tenancy, region), Fargate, and Lambda usage. Standard Reserved Instances are locked to specific instance type and region, offering less flexibility.",df:"Standard",u:"https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service or feature allows customers to tag resources and then use those tags to track and allocate costs by project, department, or environment?",
o:["AWS Organizations organizational units (OUs)","Cost allocation tags used with AWS Cost Explorer","IAM resource-level permissions","CloudFormation stack names"],
c:["B"],e:"Cost allocation tags (user-defined or AWS-generated) label resources with metadata like Project, Department, or Environment. Once activated in the Billing Console, these tags appear in Cost Explorer and Cost and Usage Reports, enabling detailed cost breakdown and chargeback. OUs organize accounts; IAM controls access; CloudFormation names identify stacks.",df:"Standard",u:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html"},

{d:D,dn:DN,qt:"single",s:"Which level of AWS Support is included at NO additional cost for all AWS accounts?",
o:["Developer Support with business-hours email access","Basic Support with 24/7 access to documentation, whitepapers, and limited Trusted Advisor checks","Business Support with 24/7 phone and chat","Enterprise Support with a Technical Account Manager"],
c:["B"],e:"Basic Support is free for all AWS customers. It includes 24/7 access to customer service, documentation, whitepapers, AWS re:Post community, and 7 core Trusted Advisor checks. It does NOT include technical support — that requires Developer ($29+/month), Business ($100+/month), or Enterprise ($15,000+/month) plans.",df:"Standard",u:"https://aws.amazon.com/premiumsupport/plans/"},

{d:D,dn:DN,qt:"single",s:"How does AWS charge for data transfer?",
o:["All data transfer between AWS services is completely free","Data transfer INTO AWS is free; data transfer OUT of AWS to the internet is charged per GB","Both inbound and outbound data transfer are charged equally per GB","Data transfer is included in the compute cost of EC2 instances"],
c:["B"],e:"AWS generally does not charge for inbound data transfer (into AWS from the internet). Outbound data transfer (from AWS to the internet) is charged per GB on a tiered pricing model. Data transfer between services in the same AZ is typically free; cross-AZ and cross-region transfers have varying charges.",df:"Standard",u:"https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer"},
];
