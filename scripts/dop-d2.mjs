// DOP-C02 Domain 2: Resilient Cloud Solutions & Monitoring (30%)
const D = "dop-d2", DN = "Domain 2: Resilient Cloud Solutions and Monitoring";
export default [
{d:D,dn:DN,qt:"single",s:"An enterprise application runs across two AWS regions in an active-active setup behind AWS Global Accelerator. The DevOps team needs to automatically route 100% of user traffic away from a region if regional health checks fail. How should health checks be configured?",
o:["Configure Global Accelerator Endpoint Group health checks with custom health check paths and thresholds","Use Route 53 latency routing without health checks","Enable S3 Multi-Region Access Points","Configure EC2 Auto Scaling default timers"],
c:["A"],e:"AWS Global Accelerator continuously monitors the health of endpoints in its endpoint groups. If an endpoint or region becomes unhealthy, traffic is rerouted within seconds to healthy endpoints in another region.",df:"Standard",u:"https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-health-checking.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps engineer needs to troubleshoot high latency in a distributed microservices application involving API Gateway, AWS Lambda, Amazon DynamoDB, and external HTTP APIs. Which tracing service provides visual trace timelines of sub-segment calls?",
o:["AWS X-Ray with Active Tracing enabled","Amazon CloudWatch Logs Insights","AWS CloudTrail Management Events","AWS Systems Manager OpsCenter"],
c:["A"],e:"AWS X-Ray collects trace data from distributed microservices, rendering visual end-to-end service graphs and timeline breakdowns of sub-segment requests to identify bottlenecks.",df:"Standard",u:"https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to aggregate, filter, and stream application logs from 500 EC2 instances into an Amazon Kinesis Data Stream for real-time analytics. Which agent should be installed on the EC2 instances?",
o:["Unified CloudWatch Agent or AWS Kinesis Agent","AWS Systems Manager SSM Agent","AWS CodeDeploy Agent","AWS X-Ray Daemon"],
c:["A"],e:"The Unified CloudWatch Agent and AWS Kinesis Agent can tail application log files on EC2 instances and stream them continuously into Kinesis Data Streams or CloudWatch Logs.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/QuickStartSendLogs.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps team wants to perform Chaos Engineering experiments on their AWS infrastructure (such as injecting CPU stress, blocking subnet traffic, or stopping RDS instances) to test system resilience. Which AWS service provides fault injection capabilities?",
o:["AWS Fault Injection Service (AWS FIS)","AWS Systems Manager Patch Manager","AWS Trusted Advisor","AWS Security Hub"],
c:["A"],e:"AWS Fault Injection Service (AWS FIS) is a fully managed service for running fault injection experiments on AWS to improve workload observability, recovery, and resilience.",df:"Standard",u:"https://docs.aws.amazon.com/fis/latest/userguide/what-is.html"},

{d:D,dn:DN,qt:"multiple",s:"A DevOps team wants to monitor real-time application metrics and trigger automated healing actions when an Auto Scaling Group instance fails. Which TWO components work together to automate replacement? (Select TWO.)",
o:["Auto Scaling Group ELB Health Checks to detect unhealthy instances","Auto Scaling Group Automatic Instance Replacement to launch a new instance","AWS Glue DataBrew for log cleanup","Amazon S3 Transfer Acceleration for metrics","AWS CodeCommit webhooks"],
c:["A","B"],e:"Enabling ELB health checks on an ASG ensures application-level health is monitored. Unhealthy instances are automatically terminated and replaced by fresh instances from the launch template.",df:"Standard",u:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-add-elb-healthcheck.html"},

{d:D,dn:DN,qt:"single",s:"A critical production application experiences intermittent network packet drops. The DevOps team needs to analyze TCP flag details and packet payload headers captured at the ENI level. Which VPC feature captures actual network packets?",
o:["VPC Traffic Mirroring","VPC Flow Logs","Amazon CloudWatch Logs","AWS CloudTrail"],
c:["A"],e:"VPC Traffic Mirroring copies actual network traffic (L2-L4 payloads and TCP flags) from Elastic Network Interfaces (ENIs) and forwards it to out-of-band security/monitoring appliances.",df:"Challenging",u:"https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps team needs to query 500GB of JSON application log files stored in Amazon S3 over the past year to find specific error messages using SQL without launching any servers. Which service should be used?",
o:["Amazon Athena","Amazon OpenSearch Service","Amazon Redshift Spectrum","AWS Systems Manager Session Manager"],
c:["A"],e:"Amazon Athena is a serverless interactive query service that enables querying data directly in S3 using standard ANSI SQL without managing database infrastructure.",df:"Standard",u:"https://docs.aws.amazon.com/athena/latest/ug/what-is.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps team wants to trigger an automated Lambda remediation script whenever an AWS Health event (such as an EC2 hardware degradation notification) is published for their account. Which service routes AWS Health events?",
o:["Amazon EventBridge with an AWS Health event rule","Amazon CloudWatch Logs Subscription Filter","AWS Config Conformance Pack","AWS Systems Manager Parameter Store"],
c:["A"],e:"AWS Health integrates natively with EventBridge. You can create EventBridge rules matching `aws.health` event sources to automatically invoke Lambda functions or Systems Manager runbooks.",df:"Standard",u:"https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps engineer needs to monitor disk utilization percentage on Linux EC2 instances. Which CloudWatch metric dimension namespace contains custom metrics pushed by the CloudWatch Agent?",
o:["CWAgent","AWS/EC2","AWS/Logs","AWS/SystemsManager"],
c:["A"],e:"Metrics published by the Unified CloudWatch Agent (such as disk_used_percent or mem_used_percent) are published under the default `CWAgent` custom namespace.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/metrics-collected-by-CloudWatch-agent.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to implement cross-region automated backup copy for Amazon RDS PostgreSQL databases. Which service centrally manages backup schedules, cross-region replication, and lifecycle retention policies?",
o:["AWS Backup","Amazon Data Lifecycle Manager","AWS Systems Manager State Manager","AWS CloudFormation StackSets"],
c:["A"],e:"AWS Backup provides centralized management for database and volume backups, supporting automated cross-region and cross-account backup copy policies.",df:"Standard",u:"https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html"},
];
