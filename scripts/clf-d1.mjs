// CLF-C02 Domain 1: Cloud Concepts (24%) — 18 unique questions
const D = "clf-d1", DN = "Domain 1: Cloud Concepts";
export default [
{d:D,dn:DN,qt:"single",s:"A startup wants to launch a web application without purchasing physical servers. They want to pay only for the compute resources they actually consume. Which cloud benefit does this describe?",
o:["High availability through multiple data centers","Trade fixed capital expense (CapEx) for variable operational expense (OpEx)","Increased speed and agility for deployments","Global reach through edge locations"],
c:["B"],e:"The pay-as-you-go model lets companies avoid upfront hardware purchases (CapEx) and instead pay only for resources consumed (OpEx). This eliminates the need to predict capacity and invest in data centers before knowing demand.",df:"Standard",u:"https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html"},

{d:D,dn:DN,qt:"single",s:"A company's on-premises data center requires 3 months to procure new servers. After migrating to AWS, they can deploy new environments in minutes. Which advantage of cloud computing does this demonstrate?",
o:["Economy of scale","Elasticity","Increased speed and agility","Global infrastructure"],
c:["C"],e:"Speed and agility means IT resources are available in minutes instead of weeks or months. Developers can experiment, test, and launch faster because they don't need to wait for hardware procurement, racking, and configuration.",df:"Standard",u:"https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html"},

{d:D,dn:DN,qt:"single",s:"A retail company experiences 10x traffic during holiday sales but low traffic the rest of the year. They want infrastructure that automatically adjusts capacity based on demand. Which cloud computing characteristic does this describe?",
o:["Fault tolerance","Elasticity — the ability to scale resources up and down automatically","High durability of stored data","Disaster recovery across regions"],
c:["B"],e:"Elasticity allows you to acquire resources when needed and release them when no longer required. Auto Scaling automatically adjusts compute capacity to maintain steady, predictable performance at the lowest possible cost during demand fluctuations.",df:"Standard",u:"https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html"},

{d:D,dn:DN,qt:"single",s:"Which cloud computing deployment model allows a company to keep sensitive data on their own servers while using AWS for non-sensitive workloads?",
o:["Public cloud — all resources on AWS","Private cloud — all resources on-premises","Hybrid cloud — combination of on-premises and AWS resources","Multi-cloud — using multiple public cloud providers"],
c:["C"],e:"Hybrid cloud combines on-premises (private) infrastructure with public cloud resources. This lets organizations keep sensitive data and legacy applications on-premises while leveraging AWS for scalable, non-sensitive workloads. AWS supports hybrid with services like Outposts, Direct Connect, and VPN.",df:"Standard",u:"https://docs.aws.amazon.com/whitepapers/latest/aws-overview/types-of-cloud-computing.html"},

{d:D,dn:DN,qt:"multiple",s:"A CTO is presenting the business benefits of migrating to AWS to their board of directors. Which TWO are advantages of cloud computing over on-premises data centers? (Select TWO.)",
o:["Benefit from massive economies of scale that reduce per-unit costs","Stop spending money running and maintaining data centers","Guarantee that application bugs will not occur in the cloud","Eliminate the need for any IT security practices","Ensure zero downtime under all circumstances"],
c:["A","B"],e:"AWS aggregates usage from hundreds of thousands of customers, achieving economies of scale that translate to lower pay-as-you-go prices. Moving to cloud eliminates data center operations (power, cooling, racking, patching). Cloud doesn't eliminate bugs or security needs, and no system guarantees zero downtime.",df:"Standard",u:"https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service allows a company to run virtual servers in the cloud with full control over the operating system and installed software?",
o:["Amazon S3","Amazon EC2","AWS Lambda","Amazon RDS"],
c:["B"],e:"Amazon EC2 (Elastic Compute Cloud) provides resizable virtual servers (instances) in the cloud. Users have full control over the OS, can install any software, and choose from many instance types. S3 is object storage, Lambda is serverless compute, and RDS is managed databases.",df:"Standard",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html"},

{d:D,dn:DN,qt:"single",s:"A developer wants to run code in response to events (like a file upload to S3) without provisioning or managing servers. The code runs for a few seconds per invocation. Which AWS service is BEST suited?",
o:["Amazon EC2 with Auto Scaling","AWS Lambda","Amazon ECS with Fargate","AWS Elastic Beanstalk"],
c:["B"],e:"AWS Lambda is a serverless compute service that runs code in response to events without provisioning servers. You pay only for the compute time consumed (per millisecond). Lambda automatically scales and is ideal for short-duration, event-driven functions. EC2 requires server management; ECS runs containers; Elastic Beanstalk is a deployment platform.",df:"Standard",u:"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"},

{d:D,dn:DN,qt:"single",s:"What does the AWS Well-Architected Framework help organizations accomplish?",
o:["Automatically fix all security vulnerabilities in AWS accounts","Evaluate architectures against best practices across six pillars including security, reliability, and cost optimization","Generate compliance certifications for regulatory bodies","Migrate on-premises servers to AWS automatically"],
c:["B"],e:"The Well-Architected Framework provides architectural best practices across six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. It helps teams make informed decisions through Well-Architected Reviews, not automated fixes or migrations.",df:"Standard",u:"https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"},

{d:D,dn:DN,qt:"single",s:"A small business wants to experiment with AWS services before committing to a paid plan. Which offering allows them to try certain AWS services for free within defined usage limits?",
o:["AWS Enterprise Support Plan","AWS Free Tier which provides free usage of select services within limits","AWS Marketplace free trials","AWS Partner Network consulting credits"],
c:["B"],e:"The AWS Free Tier lets new and existing customers explore services at no cost. It includes Always Free (e.g., 1 million Lambda requests/month), 12-Month Free (e.g., 750 hours t2.micro EC2/month), and Trials for specific services. No paid plan is required to start.",df:"Standard",u:"https://aws.amazon.com/free/"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides a global content delivery network (CDN) that caches content at edge locations close to users to reduce latency?",
o:["Amazon Route 53","AWS Direct Connect","Amazon CloudFront","AWS Global Accelerator"],
c:["C"],e:"Amazon CloudFront is AWS's CDN service with 450+ Points of Presence (edge locations) worldwide. It caches static and dynamic content close to viewers, reducing latency. Route 53 is DNS, Direct Connect is dedicated network links, and Global Accelerator optimizes TCP/UDP routing over the AWS network.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"},

{d:D,dn:DN,qt:"multiple",s:"Which TWO statements accurately describe the AWS Cloud? (Select TWO.)",
o:["AWS operates data centers in Regions and Availability Zones around the world","AWS customers retain ownership and full control of their data","AWS guarantees 100% uptime for all services at all times","Using AWS means you no longer need to think about security","AWS eliminates the need for capacity planning completely"],
c:["A","B"],e:"AWS has 30+ geographic Regions, each with multiple isolated Availability Zones, providing global infrastructure. Customers always retain full ownership and control of their data—AWS does not access it without permission. No provider guarantees 100% uptime; security is a shared responsibility; capacity planning is still needed (just simplified).",df:"Standard",u:"https://aws.amazon.com/about-aws/global-infrastructure/"},

{d:D,dn:DN,qt:"single",s:"A company needs a managed relational database service that handles backups, patching, and replication. They don't want to manage the underlying OS or database software. Which service should they use?",
o:["Amazon EC2 with self-managed MySQL installed","Amazon DynamoDB","Amazon RDS","Amazon S3"],
c:["C"],e:"Amazon RDS (Relational Database Service) is a managed service handling database administration tasks: automated backups, software patching, Multi-AZ replication, and monitoring. Customers choose the engine (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server) without managing the underlying infrastructure. EC2 is self-managed; DynamoDB is NoSQL; S3 is object storage.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"},

{d:D,dn:DN,qt:"single",s:"An architect needs to store and retrieve any amount of data at any time from anywhere on the web. The storage must be highly durable (11 nines). Which AWS service meets this requirement?",
o:["Amazon EBS (Elastic Block Store)","Amazon S3 (Simple Storage Service)","Amazon EFS (Elastic File System)","AWS Storage Gateway"],
c:["B"],e:"Amazon S3 provides 99.999999999% (11 nines) durability for object storage. It stores data as objects in buckets, accessible via HTTP/HTTPS from anywhere. S3 automatically replicates data across at least 3 AZs. EBS is block storage for EC2, EFS is file storage, and Storage Gateway is for hybrid environments.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"},

{d:D,dn:DN,qt:"single",s:"What is an AWS Region?",
o:["A single data center building operated by AWS","A geographic area containing two or more isolated Availability Zones","An edge location used by CloudFront for content caching","A virtual private network segment within AWS"],
c:["B"],e:"An AWS Region is a separate geographic area (e.g., us-east-1, eu-west-1) containing multiple isolated Availability Zones (AZs). Each AZ is one or more discrete data centers with redundant power, networking, and connectivity. Regions are fully independent, and users choose Regions based on latency, compliance, and service availability.",df:"Standard",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"},

{d:D,dn:DN,qt:"single",s:"Which cloud computing model provides the customer with the MOST control over the underlying infrastructure?",
o:["Software as a Service (SaaS) — e.g., Salesforce, Gmail","Platform as a Service (PaaS) — e.g., AWS Elastic Beanstalk","Infrastructure as a Service (IaaS) — e.g., Amazon EC2","Function as a Service (FaaS) — e.g., AWS Lambda"],
c:["C"],e:"IaaS provides the highest level of control and flexibility. With EC2, customers manage the OS, middleware, runtime, and applications. PaaS abstracts the OS/runtime (customer manages applications and data). SaaS abstracts everything (customer only uses the software). FaaS abstracts all infrastructure.",df:"Standard",u:"https://docs.aws.amazon.com/whitepapers/latest/aws-overview/types-of-cloud-computing.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to migrate their on-premises VMware workloads to AWS with minimal changes to the VMs themselves. Which AWS service helps with this lift-and-shift migration?",
o:["AWS Snowball for physical data transfer","AWS Application Migration Service (MGN) for automated server migration","AWS Database Migration Service for database migration","Amazon Lightsail for simple applications"],
c:["B"],e:"AWS Application Migration Service (MGN) automates lift-and-shift migration by continuously replicating source servers to AWS. It minimizes cutover time and supports most OS and applications without changes. Snowball is for large data transfer, DMS is for databases, and Lightsail is for simple pre-configured deployments.",df:"Standard",u:"https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html"},

{d:D,dn:DN,qt:"single",s:"Which pillar of the AWS Well-Architected Framework focuses on recovering from infrastructure or service disruptions and dynamically acquiring computing resources to meet demand?",
o:["Security pillar","Reliability pillar","Performance Efficiency pillar","Operational Excellence pillar"],
c:["B"],e:"The Reliability pillar focuses on ensuring a workload performs its intended function correctly and consistently. It covers recovery from failures, meeting demand through dynamic scaling, and mitigating disruptions. Security covers data protection; Performance Efficiency covers efficient resource use; Operational Excellence covers operational procedures.",df:"Standard",u:"https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to estimate the monthly cost of running a specific set of AWS resources before deploying them. Which tool should they use?",
o:["AWS Cost Explorer for historical spending analysis","AWS Pricing Calculator for estimating costs of proposed architectures","AWS Budgets for setting spending alerts","AWS Trusted Advisor for cost optimization recommendations"],
c:["B"],e:"AWS Pricing Calculator allows users to model and estimate the cost of AWS architectures before deployment. Users select services, configure resource specifications, and get a monthly cost estimate. Cost Explorer analyzes historical spend; Budgets sets alerts on current spending; Trusted Advisor recommends optimizations.",df:"Standard",u:"https://calculator.aws/"},
];
