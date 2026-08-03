// DVA-C02 Domain 4: Troubleshooting and Optimization (18%)
const D = "dva-d4", DN = "Domain 4: Troubleshooting and Optimization";
export default [
{d:D,dn:DN,qt:"single",s:"A distributed application composed of API Gateway, Lambda, and DynamoDB is experiencing elevated response latencies. The developer needs to trace requests across all microservices to identify bottlenecks. Which service should be enabled?",
o:["AWS X-Ray","Amazon CloudWatch Logs Insights","AWS CloudTrail","Amazon Inspector"],
c:["A"],e:"AWS X-Ray helps developers analyze and debug distributed, microservice-based applications. It generates service maps and traces end-to-end user requests.",df:"Standard",u:"https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"},

{d:D,dn:DN,qt:"single",s:"A developer notices that an API Gateway REST API returns HTTP 429 Too Many Requests errors during peak traffic hours. What is the root cause of this error?",
o:["API Gateway throttling limits have been exceeded","The client sent an unauthenticated request","The backend Lambda function threw an unhandled exception","API Gateway experienced an internal gateway timeout"],
c:["A"],e:"HTTP status code 429 indicates that rate limits or throttling limits configured on API Gateway (or default account limit of 10,000 rps) have been exceeded.",df:"Standard",u:"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html"},

{d:D,dn:DN,qt:"single",s:"A Lambda function experiences frequent cold starts, adding 2 seconds of latency to user requests. How can the developer eliminate cold start latency for critical functions?",
o:["Configure Provisioned Concurrency for the function","Increase the function memory allocation to 10240 MB","Set the function timeout to 15 minutes","Use SQS dead-letter queues"],
c:["A"],e:"Provisioned Concurrency initializes requested execution environments ahead of time so functions respond immediately to incoming requests without cold starts.",df:"Standard",u:"https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html"},

{d:D,dn:DN,qt:"single",s:"An application writing to a DynamoDB table receives ProvisionedThroughputExceededException errors. Which strategy should the developer implement first in the application code?",
o:["Implement exponential backoff with jitter in the application retry logic","Increase the table read/write capacity units to maximum","Re-create the table as a Global Table","Switch from DynamoDB to S3"],
c:["A"],e:"AWS SDKs automatically implement exponential backoff and jitter for retrying requests hit by ProvisionedThroughputExceededException. Adding backoff prevents request flooding.",df:"Standard",u:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.RetryAndBackoff"},

{d:D,dn:DN,qt:"multiple",s:"A developer wants to inspect custom log messages emitted by a NodeJS Lambda function. Which TWO CloudWatch features help view and query these logs efficiently? (Select TWO.)",
o:["Amazon CloudWatch Logs Streams generated automatically per Lambda container","Amazon CloudWatch Logs Insights to run interactive SQL-like queries across log groups","AWS X-Ray Active Tracing","Amazon CloudWatch Metric Filters","AWS CloudTrail Event History"],
c:["A","B"],e:"Lambda automatically streams console.log messages to CloudWatch Log Streams under /aws/lambda/<function-name>. CloudWatch Logs Insights allows querying across these log streams.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html"},

{d:D,dn:DN,qt:"single",s:"A Lambda function connected to an Amazon RDS PostgreSQL database suffers from database connection timeouts during concurrent invocations. Which solution prevents database connection exhaustion?",
o:["Create an Amazon RDS Proxy and point Lambda database connections to the proxy","Increase Lambda function memory to maximum","Use SQS FIFO queue in front of Lambda","Enable Multi-AZ on the RDS database"],
c:["C"],e:"Amazon RDS Proxy pools and shares database connections, protecting the database from running out of connections during traffic spikes from Lambda functions.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html"},

{d:D,dn:DN,qt:"single",s:"A developer needs to measure memory usage inside an EC2 instance. CloudWatch standard metrics do not show memory utilization. What must be installed on the EC2 instance to send memory metrics to CloudWatch?",
o:["Unified CloudWatch Agent","AWS Systems Manager Agent (SSM Agent)","AWS X-Ray Daemon","AWS CodeDeploy Agent"],
c:["A"],e:"Hypervisor metrics for EC2 only include CPU, Disk I/O, and Network. To track OS-level metrics like RAM usage or disk space, the CloudWatch Agent must be installed inside the guest OS.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html"},

{d:D,dn:DN,qt:"single",s:"An application reading from a Kinesis Data Stream falls behind and records a high GetRecords.IteratorAgeMilliseconds metric value. What does this indicate?",
o:["Consumers are reading data slower than producers are writing data to the stream","The stream has run out of storage space","The consumer application credentials have expired","Kinesis Data Stream KMS key is disabled"],
c:["A"],e:"IteratorAgeMilliseconds measures the age of the last record processed relative to when it arrived in the stream. A high value means consumers cannot keep up with write throughput.",df:"Standard",u:"https://docs.aws.amazon.com/streams/latest/dev/monitoring-with-cloudwatch.html"},

{d:D,dn:DN,qt:"single",s:"Which CloudWatch Logs metric feature allows transforming raw log text (such as 'ERROR') into a numerical metric for triggering alarms?",
o:["Metric Filters","Log Streams","Subscription Filters","CloudWatch Insights"],
c:["A"],e:"Metric Filters search for terms or patterns in CloudWatch log streams and turn matching occurrences into numeric CloudWatch metrics, which can then trigger alarms.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogDataUsingFilters.html"},

{d:D,dn:DN,qt:"single",s:"A developer receives HTTP 504 Gateway Timeout from an Application Load Balancer. What is the cause of this error?",
o:["The target application on EC2 or Lambda failed to respond before the ALB idle timeout expired","The client SSL certificate is invalid","The security group blocked inbound HTTP traffic","The target group has zero registered targets"],
c:["A"],e:"HTTP 504 Gateway Timeout occurs when the load balancer connected to a target, but the target did not send a response before the ALB idle timeout limit (default 60s) elapsed.",df:"Standard",u:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-troubleshooting.html#http-504-issues"},
];
