// CLF-C02 Domain 3: Cloud Technology and Services (34%) — 22 unique questions
const D = "clf-d3", DN = "Domain 3: Cloud Technology and Services";
export default [
{d:D,dn:DN,qt:"single",s:"Which AWS service is a fully managed NoSQL database that provides single-digit millisecond performance at any scale?",
o:["Amazon RDS","Amazon Redshift","Amazon DynamoDB","Amazon Aurora"],
c:["C"],e:"DynamoDB is a fully managed NoSQL key-value and document database. It delivers single-digit millisecond performance with built-in security, backup, and in-memory caching (DAX). RDS and Aurora are relational databases; Redshift is a data warehouse for analytics.",df:"Standard",u:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides managed DNS (Domain Name System) and can route users to the closest healthy endpoint?",
o:["Amazon CloudFront","Amazon Route 53","AWS Direct Connect","Elastic Load Balancing"],
c:["B"],e:"Amazon Route 53 is a highly available, scalable DNS web service. It translates domain names to IP addresses and supports routing policies including latency-based, geolocation, failover, and weighted routing to direct users optimally. CloudFront is a CDN; Direct Connect is dedicated networking; ELB distributes traffic across instances.",df:"Standard",u:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to connect their on-premises data center to their AWS VPC with a dedicated, private network connection that doesn't traverse the public internet. Which service should they use?",
o:["AWS VPN (Site-to-Site)","AWS Direct Connect","VPC Peering","AWS Transit Gateway"],
c:["B"],e:"AWS Direct Connect provides a dedicated, private network connection from on-premises to AWS. Traffic does not traverse the public internet, providing consistent network performance and reduced bandwidth costs. VPN uses encrypted tunnels over the internet; VPC Peering connects VPCs; Transit Gateway is a hub for network connections.",df:"Standard",u:"https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service allows you to run containerized applications without managing the underlying server infrastructure?",
o:["Amazon EC2","AWS Fargate","Amazon S3","AWS Elastic Beanstalk"],
c:["B"],e:"AWS Fargate is a serverless compute engine for containers. It runs containers without requiring you to provision, configure, or scale clusters of VMs. You define your container image, CPU, and memory requirements—Fargate handles the infrastructure. EC2 requires server management; S3 is storage; Elastic Beanstalk is a deployment platform.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html"},

{d:D,dn:DN,qt:"multiple",s:"Which TWO services are used for object storage and block storage respectively on AWS? (Select TWO.)",
o:["Amazon S3 for scalable object storage of files, images, and backups","Amazon EBS for persistent block storage volumes attached to EC2 instances","Amazon RDS for storing database records","AWS Lambda for temporary data processing storage","Amazon SQS for message storage and queuing"],
c:["A","B"],e:"S3 is AWS's object storage service—ideal for files, images, logs, and backups with virtually unlimited scalability. EBS provides persistent block storage volumes (like virtual hard drives) attached to EC2 instances, suitable for databases and file systems. RDS is a database service; Lambda is serverless compute; SQS is message queuing.",df:"Standard",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service can distribute incoming application traffic across multiple EC2 instances in different Availability Zones?",
o:["Amazon Route 53","Elastic Load Balancing (ELB)","AWS Auto Scaling","Amazon CloudFront"],
c:["B"],e:"Elastic Load Balancing (ELB) automatically distributes incoming traffic across multiple targets (EC2, containers, Lambda, IPs) in one or more AZs. It offers three types: Application LB (HTTP/HTTPS), Network LB (TCP/UDP), and Gateway LB (third-party appliances). Route 53 is DNS; Auto Scaling adjusts capacity; CloudFront is a CDN.",df:"Standard",u:"https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to monitor CPU utilization, network traffic, and disk I/O of their EC2 instances and set alarms when thresholds are exceeded. Which service should they use?",
o:["AWS CloudTrail","Amazon CloudWatch","AWS Config","AWS X-Ray"],
c:["B"],e:"Amazon CloudWatch collects and monitors metrics, logs, and events from AWS resources. It can set alarms to trigger notifications (SNS) or actions (Auto Scaling) when metrics exceed thresholds. CloudTrail logs API calls; Config tracks resource configuration; X-Ray traces application requests across distributed services.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides a virtual private network within AWS where you can launch resources in an isolated network that you define?",
o:["AWS Direct Connect","Amazon VPC (Virtual Private Cloud)","AWS PrivateLink","AWS Transit Gateway"],
c:["B"],e:"Amazon VPC lets you create a logically isolated network within AWS. You control IP address ranges, subnets, route tables, network gateways, and security settings. VPC is the foundational networking service — virtually all AWS resources run within a VPC. Direct Connect is for on-premises links; PrivateLink is for private service access; Transit Gateway connects VPCs.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides a managed message queue that decouples application components?",
o:["Amazon SNS","Amazon SQS","Amazon Kinesis","AWS Step Functions"],
c:["B"],e:"Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables decoupling of distributed system components. Producers send messages; consumers process them independently. SNS is pub/sub notifications; Kinesis is real-time data streaming; Step Functions orchestrates workflows.",df:"Standard",u:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html"},

{d:D,dn:DN,qt:"single",s:"A data analytics team needs to run SQL queries on petabytes of structured data in a managed data warehouse. Which AWS service is purpose-built for this?",
o:["Amazon RDS","Amazon DynamoDB","Amazon Redshift","Amazon Athena"],
c:["C"],e:"Amazon Redshift is a fully managed, petabyte-scale data warehouse using columnar storage and massively parallel processing (MPP). It's designed for complex analytical queries across large datasets. RDS is for transactional databases; DynamoDB is NoSQL; Athena is serverless ad-hoc SQL on S3.",df:"Standard",u:"https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html"},

{d:D,dn:DN,qt:"multiple",s:"A company needs to build a serverless web application. Which TWO services would form the core compute and API layer? (Select TWO.)",
o:["AWS Lambda for serverless backend compute functions","Amazon API Gateway for creating, publishing, and managing RESTful APIs","Amazon EC2 for hosting web server instances","AWS Elastic Beanstalk for deploying web applications on managed servers","Amazon ECS for running Docker containers"],
c:["A","B"],e:"Lambda provides serverless compute that runs code without provisioning servers—you pay per invocation. API Gateway creates RESTful HTTP endpoints that trigger Lambda functions, forming a fully serverless backend. EC2 and ECS require managing servers or containers; Elastic Beanstalk manages infrastructure but still uses EC2.",df:"Standard",u:"https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service automatically adjusts the number of EC2 instances in a fleet based on demand?",
o:["Elastic Load Balancing","Amazon EC2 Auto Scaling","AWS CloudFormation","Amazon Route 53"],
c:["B"],e:"EC2 Auto Scaling automatically increases or decreases the number of instances based on defined scaling policies (target tracking, step, scheduled). It ensures you have the right number of instances to handle load while minimizing costs. ELB distributes traffic; CloudFormation provisions infrastructure; Route 53 is DNS.",df:"Standard",u:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service enables Infrastructure as Code (IaC) by allowing you to define cloud resources in templates and provision them in an automated, repeatable manner?",
o:["AWS Systems Manager","AWS CloudFormation","AWS OpsWorks","AWS CodeDeploy"],
c:["B"],e:"AWS CloudFormation uses JSON or YAML templates to define AWS resources declaratively. It provisions and manages the entire stack as a single unit, enabling version control, repeatability, and rollback. Systems Manager manages operational tasks; OpsWorks uses Chef/Puppet; CodeDeploy automates code deployments.",df:"Standard",u:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"},

{d:D,dn:DN,qt:"single",s:"A company needs a managed service to run Apache Kafka for real-time data streaming without managing cluster infrastructure. Which AWS service should they use?",
o:["Amazon Kinesis Data Streams","Amazon MSK (Managed Streaming for Apache Kafka)","Amazon SQS","Amazon SNS"],
c:["B"],e:"Amazon MSK is a fully managed Apache Kafka service. It handles cluster provisioning, configuration, patching, and scaling, letting teams focus on building streaming applications. Kinesis Data Streams is AWS's native streaming service (not Kafka-compatible); SQS is message queuing; SNS is pub/sub notifications.",df:"Standard",u:"https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS database service is a fully managed graph database used for applications that need to query highly connected datasets like social networks or recommendation engines?",
o:["Amazon DynamoDB","Amazon Neptune","Amazon DocumentDB","Amazon Timestream"],
c:["B"],e:"Amazon Neptune is a fully managed graph database supporting Apache TinkerPop Gremlin and W3C SPARQL. It's optimized for traversing billions of relationships with millisecond latency—ideal for social graphs, knowledge graphs, fraud detection, and recommendation engines. DynamoDB is key-value; DocumentDB is document-oriented; Timestream is for time-series data.",df:"Standard",u:"https://docs.aws.amazon.com/neptune/latest/userguide/intro.html"},

{d:D,dn:DN,qt:"single",s:"Which type of Elastic Load Balancer operates at the application layer (Layer 7) and can route traffic based on URL paths, hostnames, and HTTP headers?",
o:["Network Load Balancer (NLB) for TCP/UDP traffic","Application Load Balancer (ALB) for HTTP/HTTPS traffic","Gateway Load Balancer (GWLB) for third-party virtual appliances","Classic Load Balancer for basic load balancing"],
c:["B"],e:"ALB operates at Layer 7 (HTTP/HTTPS) and supports content-based routing using path patterns (/api/*, /images/*), host headers, HTTP methods, and query strings. NLB operates at Layer 4 (TCP/UDP) for ultra-low latency. GWLB routes to security appliances. Classic LB is the legacy option.",df:"Standard",u:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to send notification emails, SMS messages, and push notifications to multiple subscribers simultaneously when a new order is placed. Which AWS service provides this pub/sub messaging capability?",
o:["Amazon SQS","Amazon SNS (Simple Notification Service)","Amazon SES (Simple Email Service)","AWS Step Functions"],
c:["B"],e:"Amazon SNS is a fully managed pub/sub messaging service. When a message is published to an SNS topic, it's immediately delivered to all subscribers (email, SMS, HTTP/S, Lambda, SQS, mobile push). SQS is a queue (pull-based); SES is email-specific; Step Functions orchestrates workflows.",df:"Standard",u:"https://docs.aws.amazon.com/sns/latest/dg/welcome.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides a managed Kubernetes control plane for running containerized applications?",
o:["Amazon ECS (Elastic Container Service)","Amazon EKS (Elastic Kubernetes Service)","AWS Fargate","AWS App Runner"],
c:["B"],e:"Amazon EKS is a managed Kubernetes service that runs the Kubernetes control plane across multiple AZs. It's compatible with standard Kubernetes tools and plugins. ECS is AWS's proprietary container orchestration; Fargate is a serverless compute engine for both ECS and EKS; App Runner is for simple container deployments from source code.",df:"Standard",u:"https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html"},

{d:D,dn:DN,qt:"single",s:"A developer wants to build a generative AI application that accesses foundation models from Amazon, AI21 Labs, Anthropic, and Meta. Which AWS service provides this capability?",
o:["Amazon SageMaker for custom model training","Amazon Bedrock for accessing foundation models via API","Amazon Comprehend for NLP analysis","Amazon Rekognition for image analysis"],
c:["B"],e:"Amazon Bedrock is a fully managed service that provides access to high-performing foundation models (FMs) from leading AI providers through a single API. You can customize models with your data using fine-tuning and RAG without managing infrastructure. SageMaker is for building/training custom models; Comprehend is NLP; Rekognition is computer vision.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service enables you to create and manage a secure data lake built on Amazon S3?",
o:["Amazon Redshift Spectrum","AWS Lake Formation","Amazon EMR","AWS Glue"],
c:["B"],e:"AWS Lake Formation simplifies building, securing, and managing data lakes on S3. It handles data ingestion, cataloging, cleaning, and fine-grained access control. Redshift Spectrum queries S3 data from Redshift; EMR runs big data frameworks; Glue is an ETL service that Lake Formation builds upon.",df:"Standard",u:"https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides temporary, on-demand access to a virtual desktop in the cloud that users can access from any device?",
o:["Amazon EC2","Amazon WorkSpaces for persistent cloud desktops or Amazon AppStream 2.0 for application streaming","AWS Systems Manager Session Manager","Amazon Connect"],
c:["B"],e:"Amazon WorkSpaces provides fully managed, persistent cloud desktops (Windows or Linux). Amazon AppStream 2.0 streams applications to any browser. Both provide secure access from any device without managing VDI infrastructure. EC2 requires self-managing RDP/VNC; Session Manager is for server access; Connect is a contact center service.",df:"Standard",u:"https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces.html"},

{d:D,dn:DN,qt:"single",s:"A company stores large amounts of data on-premises and wants to extend their storage to AWS for backup. They need local caching for frequently accessed data. Which service provides this hybrid cloud storage?",
o:["AWS DataSync for one-time data migration","AWS Storage Gateway for hybrid cloud storage with local caching","Amazon S3 Transfer Acceleration for fast uploads","AWS Snow Family for offline data transfer"],
c:["B"],e:"AWS Storage Gateway provides hybrid cloud storage by connecting on-premises environments to AWS cloud storage (S3, EBS, Glacier). It provides local caching for low-latency access to frequently used data while storing the full dataset in AWS. DataSync is for migration/sync; Transfer Acceleration speeds uploads; Snow Family is for offline bulk transfer.",df:"Standard",u:"https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html"},
];
