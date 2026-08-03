// SAP-C02 Domain 2: Design New Solutions (29%)
const D = "sap-d2", DN = "Domain 2: Design New Solutions";
export default [
{d:D,dn:DN,qt:"single",s:"A global e-commerce application requires sub-second multi-region active-active database writes with automatic conflict resolution between us-east-1 and eu-west-1. Which database solution provides this capability?",
o:["Amazon DynamoDB Global Tables","Amazon Aurora PostgreSQL Multi-Region Read Replicas","Amazon RDS MySQL Multi-AZ","Amazon DocumentDB Global Clusters"],
c:["A"],e:"Amazon DynamoDB Global Tables provide fully managed multi-region, multi-active database replication with single-digit millisecond read/write latency in all regions.",df:"Challenging",u:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html"},

{d:D,dn:DN,qt:"single",s:"A financial application requires disaster recovery with RTO < 1 minute and RPO < 1 second across two AWS regions. The relational database must handle high transactional write volume. Which solution meets these metrics?",
o:["Amazon Aurora Global Database with automated cross-region failover","Amazon RDS PostgreSQL with cross-region read replicas","Amazon EC2 running self-managed PostgreSQL with asynchronous WAL streaming","Amazon DynamoDB with daily S3 backups"],
c:["A"],e:"Amazon Aurora Global Database provides cross-region replication latency under 1 second (RPO < 1s) and managed failover in under 1 minute (RTO < 1 min).",df:"Challenging",u:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html"},

{d:D,dn:DN,qt:"single",s:"A company is designing a microservice architecture where thousands of independent publishers send order events, and multiple downstream microservices consume only relevant subset events based on JSON message content filters. Which pattern is optimal?",
o:["Amazon EventBridge Event Bus with Event Rules matching event content patterns","Amazon SQS Standard queues with Lambda pollers","Amazon SNS topics without filtering","AWS Step Functions Parallel state"],
c:["A"],e:"Amazon EventBridge provides content-based event filtering rules directly matching event JSON attributes, efficiently routing events to distinct target services.",df:"Standard",u:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html"},

{d:D,dn:DN,qt:"single",s:"A media streaming application needs to route global user traffic to the geographically closest healthy Application Load Balancer endpoint in either us-west-2 or eu-central-1 using static Anycast IP addresses. Which network service fulfills this?",
o:["AWS Global Accelerator","Amazon Route 53 Geolocation Routing","Amazon CloudFront","AWS Direct Connect"],
c:["A"],e:"AWS Global Accelerator assigns two static Anycast IP addresses that route traffic over the AWS global backbone network directly to optimal regional endpoints.",df:"Standard",u:"https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html"},

{d:D,dn:DN,qt:"multiple",s:"A company needs to ingest real-time telemetry from 500,000 IoT devices emitting 100KB payloads per second, store raw data durably in S3, and stream real-time analytics to a dashboard. Which TWO services form the foundation of this ingestion pipeline? (Select TWO.)",
o:["Amazon Kinesis Data Streams for high-throughput stream ingestion","Amazon Data Firehose for buffering and batch writing stream data to S3","AWS Storage Gateway File Gateway","Amazon SQS Standard Queue with 14-day retention","AWS Batch cluster with EC2 Spot instances"],
c:["A","B"],e:"Kinesis Data Streams ingests massive streaming telemetry concurrently, while Amazon Data Firehose continuously converts and buffers stream records into Amazon S3.",df:"Challenging",u:"https://docs.aws.amazon.com/streams/latest/dev/introduction.html"},

{d:D,dn:DN,qt:"single",s:"A high-performance computing (HPC) financial simulation cluster running across 100 EC2 instances requires low-latency, high-throughput inter-node network communication. Which configuration minimizes latency between instances?",
o:["Deploy EC2 instances in a Cluster Placement Group within a single Availability Zone with EFA (Elastic Fabric Adapter)","Deploy instances across multiple Availability Zones in a Spread Placement Group","Use Partition Placement Groups across 3 regions","Attach multiple Elastic IP addresses"],
c:["A"],e:"A Cluster Placement Group packs instances close together within one AZ, and Elastic Fabric Adapter (EFA) bypasses the OS kernel to provide low-latency RDMA networking.",df:"Challenging",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html"},

{d:D,dn:DN,qt:"single",s:"A company requires a shared file system for a Linux web server fleet that automatically scales storage up to petabytes without pre-provisioning capacity and supports concurrent POSIX access across multiple AZs. Which service should be selected?",
o:["Amazon EFS (Elastic File System)","Amazon EBS (Elastic Block Store) gp3","Amazon FSx for Windows File Server","AWS Storage Gateway Volume Gateway"],
c:["A"],e:"Amazon EFS provides scalable POSIX-compliant shared storage accessible simultaneously across multiple Availability Zones via NFSv4.",df:"Standard",u:"https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html"},

{d:D,dn:DN,qt:"single",s:"A enterprise application requires a relational database that scales write capacity beyond a single database instance without application partitioning code changes. Which Amazon Aurora feature supports multi-master write capabilities across an AZ?",
o:["Amazon Aurora Multi-Master","Amazon Aurora Read Replicas","Amazon RDS Multi-AZ","Amazon Aurora Serverless v2"],
c:["A"],e:"Amazon Aurora Multi-Master enables creation of multiple read-write database instances across multiple AZs in a single region, providing continuous write availability.",df:"Challenging",u:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master-devs.html"},

{d:D,dn:DN,qt:"single",s:"An analytics platform needs to process petabytes of unstructured logs stored in S3 using serverless SQL queries with no cluster management overhead. Which service provides pay-per-query SQL analytics directly on S3?",
o:["Amazon Athena","Amazon Redshift RA3","Amazon EMR Hive","Amazon RDS PostgreSQL"],
c:["A"],e:"Amazon Athena is an interactive, serverless query service that allows analyzing data in Amazon S3 using standard SQL syntax, charging only per byte scanned.",df:"Standard",u:"https://docs.aws.amazon.com/athena/latest/ug/what-is.html"},

{d:D,dn:DN,qt:"single",s:"A enterprise workflow requires coordinating microservice steps that include human approvals, long-running batch jobs, and conditional branching. Which serverless service orchestrates state machines reliably?",
o:["AWS Step Functions","Amazon SQS","Amazon SNS","AWS Lambda"],
c:["A"],e:"AWS Step Functions maintains workflow state, manages execution flow, handles retries, and coordinates serverless and containerized microservice workflows.",df:"Standard",u:"https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"},
];
