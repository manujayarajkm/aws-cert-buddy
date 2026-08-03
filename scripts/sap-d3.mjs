// SAP-C02 Domain 3: Continuously Improve Existing Solutions (25%)
const D = "sap-d3", DN = "Domain 3: Continuously Improve Existing Solutions";
export default [
{d:D,dn:DN,qt:"single",s:"A legacy application runs on EC2 instances behind an Application Load Balancer. The database is experiencing read bottlenecks during peak hours. The database queries are static catalog lookups. What is the MOST cost-effective architectural improvement to reduce database load?",
o:["Implement an Amazon ElastiCache cluster to cache query results with TTL","Upgrade the RDS instance to a larger db.m6g instance class","Add 5 RDS Read Replicas across regions","Convert the ALB to a Network Load Balancer"],
c:["A"],e:"Caching static database query results in Amazon ElastiCache (Redis/Memcached) offloads reads from the database with sub-millisecond responses, providing optimal cost-performance.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Strategies.html"},

{d:D,dn:DN,qt:"single",s:"A monolithic web application deployed on EC2 instances experiences frequent crashes when background image rendering jobs run. How should the architecture be decoupled to improve reliability?",
o:["Offload image rendering jobs to SQS queue and process them with worker EC2 instances or Lambda","Increase the EC2 instance volume size","Put all rendering code inside the web server request handler thread","Use sticky sessions on the Application Load Balancer"],
c:["A"],e:"Decoupling web request processing from heavy background tasks using an SQS queue ensures web servers remain responsive while worker instances scale independently.",df:"Standard",u:"https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_decouple_mechanisms.html"},

{d:D,dn:DN,qt:"single",s:"A global web application serves users in Asia, Europe, and America. Users in Asia report slow page rendering times for static images stored in an S3 bucket in us-east-1. Which solution improves latency globally?",
o:["Create an Amazon CloudFront distribution with origin pointing to the S3 bucket","Enable S3 Versioning","Replicate the S3 bucket to eu-west-1 only","Configure S3 Block Public Access"],
c:["A"],e:"Amazon CloudFront caches static assets at over 450 global Edge Locations, dramatically reducing download latency for users regardless of their distance from the origin S3 bucket.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to perform canary deployments for a microservice deployed on AWS Fargate behind an Application Load Balancer. The deployment must shift 10% of traffic to the new revision, wait 15 minutes, and automatically rollback if CloudWatch alarms fire. Which tool automates this?",
o:["AWS CodeDeploy with Blue/Green deployment configuration","AWS CloudFormation StackSets","AWS Systems Manager Patch Manager","AWS Elastic Beanstalk All-at-Once"],
c:["A"],e:"AWS CodeDeploy natively supports Blue/Green canary deployments for ECS/Fargate services, managing traffic shifting via ALB listener rules and monitoring CloudWatch alarms for automated rollback.",df:"Challenging",u:"https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-ecs.html"},

{d:D,dn:DN,qt:"multiple",s:"A company's monthly AWS bill shows significant spend on idle EC2 dev instances and unattached EBS volumes. Which TWO tools provide automated findings and rightsizing recommendations? (Select TWO.)",
o:["AWS Compute Optimizer for instance rightsizing recommendations","AWS Trusted Advisor for identifying idle resources and unattached EBS volumes","AWS CloudTrail for log filtering","AWS CodeArtifact for package management","AWS Storage Gateway for S3 caching"],
c:["A","B"],e:"AWS Compute Optimizer uses machine learning metrics to recommend optimal EC2 instance types. AWS Trusted Advisor highlights unattached EBS volumes, unassociated IPs, and low-utilization instances.",df:"Standard",u:"https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to audit all infrastructure changes deployed via CloudFormation templates to detect resource property drift across 50 production stacks. Which feature provides this visibility?",
o:["CloudFormation Drift Detection","CloudFormation Change Sets","CloudFormation StackSets","CloudFormation Rollback"],
c:["A"],e:"CloudFormation Drift Detection allows identifying resources that have been modified outside of CloudFormation template control across stacks.",df:"Standard",u:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html"},

{d:D,dn:DN,qt:"single",s:"A serverless application using AWS Lambda and DynamoDB experiences database connection failures during sudden traffic spikes. What component should be placed between Lambda and the database?",
o:["Amazon RDS Proxy (if using RDS) or DynamoDB Adaptive Capacity with DAX","AWS Direct Connect","Amazon Route 53 Resolver","AWS Transit Gateway"],
c:["A"],e:"RDS Proxy manages database connection pools for relational databases, while DAX and Adaptive Capacity optimize DynamoDB throughput under sudden traffic bursts.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise needs to optimize network performance between two EC2 instances in different Availability Zones within the same region. Which network setting provides up to 100 Gbps network bandwidth?",
o:["Enhanced Networking (SR-IOV / ENA) on supported EC2 instance types","VPC Peering with jumbo frames disabled","AWS Site-to-Site VPN","NAT Gateway with Elastic IPs"],
c:["A"],e:"Enhanced Networking uses Single Root I/O Virtualization (SR-IOV) and Elastic Network Adapter (ENA) to deliver higher bandwidth, higher packet per second (PPS) performance, and lower inter-instance latency.",df:"Standard",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps team wants to centralize log analysis for 1,000 EC2 instances running across multiple accounts into a central Amazon OpenSearch Service cluster. Which log streaming pattern is recommended?",
o:["CloudWatch Logs Subscription Filters streaming to Amazon Data Firehose into OpenSearch","Manual SSH script copying logs daily","S3 Glacier Vault Lock export","AWS Systems Manager Run Command"],
c:["A"],e:"CloudWatch Logs subscription filters can stream log data continuously via Amazon Data Firehose directly into an Amazon OpenSearch Service cluster for real-time analysis.",df:"Challenging",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_OpenSearch_Stream.html"},

{d:D,dn:DN,qt:"single",s:"An application running on EC2 instances accesses S3 buckets. Security policies require that all S3 API traffic from the VPC must not pass over the internet or use NAT Gateways. Which VPC feature satisfies this requirement?",
o:["S3 Gateway VPC Endpoint","Internet Gateway","Egress-Only Internet Gateway","AWS Direct Connect"],
c:["A"],e:"S3 Gateway VPC Endpoints route traffic from instances in private subnets directly to S3 within the AWS network without internet gateways or NAT devices.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html"},
];
