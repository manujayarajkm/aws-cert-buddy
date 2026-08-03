// DEA-C01 Domain 3: Data Operations and Support (22%)
const D = "dea-d3", DN = "Domain 3: Data Operations and Support";
export default [
{d:D,dn:DN,qt:"single",s:"A data pipeline uses Managed Workflows for Apache Airflow (MWAA) to orchestrate complex DAGs. The data team wants to be alerted via Slack whenever a DAG task fails. How should this alerting mechanism be built?",
o:["Configure Airflow on_failure_callback functions in DAG definitions to call a Slack webhook","Use CloudWatch Logs metric filters to scan EMR logs","Set up an S3 Event Notification triggering an SNS email","Configure AWS Config auto-remediation rules"],
c:["A"],e:"Apache Airflow DAGs support `on_failure_callback` functions. When a task in MWAA fails, this callback executes custom Python code or Python operators (like SlackWebhookOperator) to send alerts directly to a channel.",df:"Standard",u:"https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer is debugging a slow PySpark job running on Amazon EMR. Which tool provides a visual UI interface for analyzing Spark stage details, task execution timelines, and memory consumption?",
o:["Spark History Server","Amazon CloudWatch Logs Insights","AWS CloudTrail Event History","AWS Systems Manager"],
c:["A"],e:"The Apache Spark History Server UI (accessible via EMR console or EMR Studio) provides visual execution graphs, timeline metrics, RDD storage usage, and stage-level execution details for Spark applications.",df:"Standard",u:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-web-interfaces.html"},

{d:D,dn:DN,qt:"single",s:"An AWS Glue ETL job fails with out-of-memory (OOM) errors during a large join operation. What is the FIRST recommended adjustment in Glue job parameters to provide more memory resources to executors?",
o:["Increase the Worker Type (e.g., from G.1X to G.2X) or increase the Number of Workers","Enable Glue Job Bookmarks","Switch from PySpark to Python Shell","Decrease the job timeout value"],
c:["A"],e:"In AWS Glue, upgrading the worker type (e.g., from G.1X with 16GB RAM to G.2X with 32GB RAM) or increasing the number of DPUs provides more memory capacity per executor, preventing OOM errors on large datasets.",df:"Standard",u:"https://docs.aws.amazon.com/glue/latest/dg/add-job.html"},

{d:D,dn:DN,qt:"single",s:"A data team wants to track data lineage and metadata across their Amazon S3 data lake, AWS Glue Data Catalog, and Amazon Redshift. Which AWS service provides centralized data governance and cataloging with lineage capabilities?",
o:["AWS DataZone","Amazon Macie","AWS Artifact","AWS Trusted Advisor"],
c:["A"],e:"Amazon DataZone is a data management service that enables business and data teams to catalog, discover, share, and govern data stored across AWS, on-premises, and third-party sources with data lineage tracking.",df:"Standard",u:"https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html"},

{d:D,dn:DN,qt:"multiple",s:"A data engineer needs to monitor performance metrics of an Amazon Redshift cluster. Which TWO CloudWatch metrics are critical to monitor query execution efficiency and resource saturation? (Select TWO.)",
o:["CPUUtilization","PercentageDiskSpaceUsed","EstimatedALBThroughput","DynamoDBReadCapacityUnits","SQSNumberOfMessagesReceived"],
c:["A","B"],e:"CPUUtilization measures compute node usage, and PercentageDiskSpaceUsed monitors disk capacity saturation on Redshift storage nodes. Both are standard CloudWatch metrics for Redshift health.",df:"Standard",u:"https://docs.aws.amazon.com/redshift/latest/mgmt/metrics-api.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer needs to automate data quality checks (such as checking for null values, schema drift, and duplicate primary keys) in an S3 data bucket during Glue ETL runs. Which service/feature provides built-in data quality rules?",
o:["AWS Glue Data Quality","Amazon Macie","AWS Config","AWS Security Hub"],
c:["A"],e:"AWS Glue Data Quality automatically measures and monitors the quality of data lakes and pipelines by evaluating data rules (e.g., Completeness, Uniqueness) using Data Quality Definition Language (DQDL).",df:"Standard",u:"https://docs.aws.amazon.com/glue/latest/dg/glue-data-quality.html"},

{d:D,dn:DN,qt:"single",s:"An automated data pipeline process fails intermittently due to transient network issues while downloading external API datasets. What design pattern ensures pipeline resilience?",
o:["Implement retry logic with exponential backoff and dead-letter handling","Increase the execution timeout to 24 hours","Deploy all pipeline resources in a single public subnet","Disable pipeline logging to improve execution speed"],
c:["A"],e:"Retrying transient errors with exponential backoff and capturing permanent failures in dead-letter queues or error branches ensures data pipelines handle transient disruptions gracefully.",df:"Standard",u:"https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_withstand_component_failures.html"},

{d:D,dn:DN,qt:"single",s:"A data team needs to run automated code syntax checks, unit tests, and regression testing whenever code is pushed to their data pipeline repository. Which AWS service hosts the CI/CD pipeline?",
o:["AWS CodePipeline with AWS CodeBuild","AWS Step Functions","AWS DataSync","AWS Batch"],
c:["A"],e:"AWS CodePipeline orchestrates automated build, test, and deployment stages, integrating with AWS CodeBuild to execute automated unit tests and validation scripts.",df:"Standard",u:"https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer needs to view detailed log events produced by AWS Glue jobs. In which Amazon CloudWatch log group are Glue ETL job logs stored by default?",
o:["/aws-glue/jobs/output and /aws-glue/jobs/error","/aws/lambda/glue-job","/aws/emr/jobs","/aws/athena/logs"],
c:["A"],e:"AWS Glue writes job standard output to /aws-glue/jobs/output and standard error / driver logs to /aws-glue/jobs/error in Amazon CloudWatch Logs.",df:"Standard",u:"https://docs.aws.amazon.com/glue/latest/dg/monitor-continuous-logging-image.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to manage dependencies and custom Python packages for Apache Airflow DAGs running on Managed Workflows for Apache Airflow (MWAA). How are custom Python packages installed?",
o:["Specify packages in a requirements.txt file and upload it to the MWAA S3 bucket","SSH into the MWAA worker nodes and run pip install","Include binary packages directly in the DAG file script","Install packages using AWS Systems Manager Run Command"],
c:["A"],e:"In Amazon MWAA, custom Python dependencies are specified in a `requirements.txt` file uploaded to the environment's S3 bucket and linked in the MWAA console configuration.",df:"Standard",u:"https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html"},
];
