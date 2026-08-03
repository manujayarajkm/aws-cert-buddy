// SOA-C02 Domain 1: Monitoring, Logging, and Remediation (20%)
const D = "soa-d1", DN = "Domain 1: Monitoring, Logging, and Remediation";
export default [
{d:D,dn:DN,qt:"single",s:"A SysOps Administrator notices an EC2 instance in a private subnet becomes unreachable. The administrator wants to analyze real-time network traffic entering and leaving the network interfaces in that subnet. Which feature should be enabled?",
o:["VPC Flow Logs","Amazon CloudWatch Application Insights","AWS CloudTrail Event History","AWS Systems Manager Session Manager"],
c:["A"],e:"VPC Flow Logs captures information about IP traffic going to and from network interfaces in a VPC, enabling troubleshooting of connectivity and security group issues.",df:"Standard",u:"https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator needs to automatically reboot an EC2 instance if its CloudWatch StatusCheckFailed_System metric evaluates to 1 for 2 consecutive minutes. Which service action should be configured on the CloudWatch alarm?",
o:["CloudWatch Alarm Action to Recover/Reboot the instance","AWS Systems Manager Patch Manager","AWS Lambda function triggered by S3","Amazon Route 53 Failover Record"],
c:["A"],e:"CloudWatch alarms support EC2 actions directly, allowing automatic reboot, stop, terminate, or recover operations when an instance status check fails.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator needs to collect memory utilization and disk space metrics from Linux EC2 instances. These metrics are not reported by default EC2 CloudWatch metrics. What must be installed on the instances?",
o:["Unified CloudWatch Agent","AWS Systems Manager SSM Agent","AWS X-Ray Daemon","AWS CodeDeploy Agent"],
c:["A"],e:"The CloudWatch agent collects internal operating system metrics (such as memory usage, swap space, and disk space) and sends them to CloudWatch Logs and Metrics.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html"},

{d:D,dn:DN,qt:"single",s:"An application running on EC2 logs errors to a local log file /var/log/app.log. The SysOps team wants to aggregate these log files centrally in CloudWatch Logs and create an alarm when the word 'CRITICAL' appears. How can this be accomplished?",
o:["Configure the CloudWatch Agent to stream /var/log/app.log and create a CloudWatch Metric Filter matching 'CRITICAL'","Use AWS CloudTrail to read /var/log/app.log","Configure VPC Flow Logs to inspect log content","Enable S3 Server Access Logging on the root EBS volume"],
c:["A"],e:"The CloudWatch Agent can tail local log files and send them to CloudWatch Logs. Metric filters scan incoming log streams for patterns (like 'CRITICAL') and publish custom metrics to trigger alarms.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogDataUsingFilters.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator wants to automatically remediate non-compliant AWS Config rules (such as unencrypted S3 buckets). Which AWS Systems Manager feature executes automated remediation scripts?",
o:["AWS Systems Manager Automation","AWS Systems Manager Parameter Store","AWS Systems Manager Patch Manager","AWS Systems Manager State Manager"],
c:["A"],e:"AWS Systems Manager Automation allows defining runbooks (SSM Automation documents) to automatically fix non-compliant resources flagged by AWS Config rules.",df:"Standard",u:"https://docs.aws.amazon.com/config/latest/developerguide/remediation.html"},

{d:D,dn:DN,qt:"multiple",s:"Which TWO CloudWatch Alarm statuses indicate that a monitored metric has crossed a defined threshold or is missing sufficient data? (Select TWO.)",
o:["ALARM","INSUFFICIENT_DATA","OK","PENDING_APPROVAL","DEPRECATED"],
c:["A","B"],e:"CloudWatch Alarms have 3 states: OK (metric within threshold), ALARM (metric outside threshold), and INSUFFICIENT_DATA (metric is missing or starting up).",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator needs to receive real-time notifications about AWS service outages and scheduled infrastructure maintenance that specifically impact their AWS resources. Which service provides this personalized view?",
o:["AWS Health Dashboard (Personal Health Dashboard)","AWS Service Health Dashboard (Public)","Amazon CloudWatch Metrics","AWS Trusted Advisor"],
c:["A"],e:"AWS Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact your specific account resources or scheduled maintenance.",df:"Standard",u:"https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html"},

{d:D,dn:DN,qt:"single",s:"A SysOps Administrator needs to inspect all API calls made to modify security groups over the past 90 days. Which AWS service stores this audit log history?",
o:["AWS CloudTrail Event History","Amazon CloudWatch Logs","AWS Config Resource Timeline","VPC Flow Logs"],
c:["A"],e:"CloudTrail Event History provides a searchable 90-day record of management events (such as CreateSecurityGroup, AuthorizeSecurityGroupIngress) across all regions.",df:"Standard",u:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events.html"},

{d:D,dn:DN,qt:"single",s:"An EC2 instance status check fails with 'StatusCheckFailed_Instance'. What does this metric specifically indicate?",
o:["Software or operating system level issues on the EC2 instance (e.g., corrupted kernel, out of memory)","Hardware or physical infrastructure failures on the underlying AWS host","Network gateway routing failure","AWS KMS key deletion"],
c:["A"],e:"StatusCheckFailed_Instance monitors the operating system and software responsiveness of the instance. StatusCheckFailed_System monitors the underlying physical hardware host.",df:"Standard",u:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html"},

{d:D,dn:DN,qt:"single",s:"A company uses AWS Organizations. The security manager wants to aggregate CloudWatch alarms and metrics across 50 AWS accounts into a single centralized monitoring dashboard. Which feature supports cross-account monitoring?",
o:["CloudWatch Cross-Account Cross-Region Dashboards","AWS Systems Manager Explorer","AWS Config Aggregator","AWS Hub Dashboard"],
c:["A"],e:"CloudWatch cross-account cross-region functionality lets you visualize, query, and alarm on metrics and logs across multiple AWS accounts and regions in unified dashboards.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html"},
];
