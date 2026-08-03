// DEA-C01 Domain 1: Data Ingestion and Processing (28%)
const D = "dea-d1", DN = "Domain 1: Data Ingestion and Processing";
export default [
{d:D,dn:DN,qt:"single",s:"A data engineering team needs to ingest streaming log data from thousands of IoT devices, transform JSON records into Apache Parquet format in real time, and load them into Amazon S3. Which serverless service fulfills this requirement with minimal development effort?",
o:["Amazon Kinesis Data Firehose (Amazon Data Firehose)","AWS Glue Python Shell jobs","Amazon EMR Cluster with Apache Hive","AWS Step Functions with Lambda"],
c:["A"],e:"Amazon Data Firehose (formerly Kinesis Data Firehose) is a fully managed service that ingests streaming data, automatically converts JSON formats into Parquet or ORC, and streams data directly to Amazon S3 without managing compute clusters.",df:"Standard",u:"https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer is designing an ETL workflow using AWS Glue. The job must automatically infer schema changes in S3 source files (such as added columns) and update the AWS Glue Data Catalog table definitions. Which Glue feature provides this?",
o:["AWS Glue Crawler","AWS Glue DataBrew","AWS Glue Trigger","AWS Glue Development Endpoint"],
c:["A"],e:"AWS Glue Crawlers connect to data stores (S3, RDS, DynamoDB), evaluate schema definitions, infer formats, and automatically create or update metadata tables in the AWS Glue Data Catalog.",df:"Standard",u:"https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html"},

{d:D,dn:DN,qt:"single",s:"A financial company needs to process high-velocity financial market data streams with sub-second processing latency using custom Apache Spark Streaming applications. Which AWS service provides managed infrastructure for Apache Spark streaming workloads?",
o:["Amazon EMR (Elastic MapReduce)","Amazon S3 Batch Operations","AWS Batch","Amazon Athena"],
c:["A"],e:"Amazon EMR is a managed cluster platform that simplifies running big data frameworks, such as Apache Spark, Apache Hadoop, and Presto. EMR handles real-time stream processing with Spark Streaming at scale.",df:"Standard",u:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-overview.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer is building a serverless data pipeline using AWS Glue PySpark. The job processes large datasets stored in S3. Which AWS Glue feature reduces data read volume by reading only the necessary columns in columnar file formats like Parquet?",
o:["Projection Pushdown / Column Pruning","Partition Pruning","AWS Glue DynamicFrame Unbox","Glue Job Bookmarks"],
c:["A"],e:"Column Pruning (Projection Pushdown) allows AWS Glue PySpark and Spark SQL to read only the specified columns required for a query from columnar formats like Parquet or ORC, drastically reducing I/O and memory usage.",df:"Standard",u:"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-formats-parquet.html"},

{d:D,dn:DN,qt:"single",s:"An ETL pipeline runs an AWS Glue PySpark job every night. The source S3 bucket receives thousands of new files daily. How can the data engineer prevent the Glue job from re-processing previously processed S3 files?",
o:["Enable AWS Glue Job Bookmarks","Use S3 Lifecycle rules to delete files after processing","Store processed file names in a DynamoDB lock table","Use AWS Glue Crawlers on a 1-minute schedule"],
c:["A"],e:"AWS Glue Job Bookmarks maintain state information and track data that has already been processed by an ETL job. When enabled, the job processes only new data added since the previous run.",df:"Standard",u:"https://docs.aws.amazon.com/glue/latest/dg/populate-job-bookmarks.html"},

{d:D,dn:DN,qt:"multiple",s:"A data engineer needs to ingest real-time data streams and store them in Amazon Redshift for analytical reporting. Which TWO combinations of services provide a continuous, serverless ingestion pathway? (Select TWO.)",
o:["Amazon Kinesis Data Streams and Amazon Data Firehose directly streaming to Amazon Redshift","AWS Lambda functions triggered by SQS queue messages inserting directly into Redshift via Data API","Amazon EMR cluster running batch Hive scripts every hour","AWS Glue Crawlers running continuously on Redshift cluster endpoints","Amazon S3 Transfer Acceleration pushing directly to Redshift tables"],
c:["A","B"],e:"Amazon Data Firehose can ingest Kinesis streams and stream directly into Amazon Redshift tables. Alternatively, Lambda functions can process SQS queue messages and execute SQL commands on Redshift via the Redshift Data API.",df:"Standard",u:"https://docs.aws.amazon.com/firehose/latest/dev/writing-with-redshift.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer needs to orchestrate a data processing pipeline consisting of an AWS Glue Crawler, an AWS Glue ETL Job, and an Amazon Athena query. The pipeline requires error handling and retry logic. Which serverless orchestration service should be used?",
o:["AWS Step Functions","AWS Elastic Beanstalk","Amazon EC2 with cron jobs","AWS Systems Manager Maintenance Windows"],
c:["A"],e:"AWS Step Functions is a serverless visual workflow service that coordinates AWS services (Glue, Athena, Lambda) into automated pipelines with built-in retry logic, branch execution, and error handling.",df:"Standard",u:"https://docs.aws.amazon.com/step-functions/latest/dg/connect-glue.html"},

{d:D,dn:DN,qt:"single",s:"A data team needs to transform unstructured CSV data stored in S3 into cleaned, normalized JSON files. The team prefers a visual, low-code interface for data preparation without writing code. Which service should they use?",
o:["AWS Glue DataBrew","AWS Glue Studio","Amazon EMR Studio","AWS DataSync"],
c:["A"],e:"AWS Glue DataBrew is a visual data preparation tool that lets data analysts and engineers clean and normalize data with over 250 pre-built transformations without writing code.",df:"Standard",u:"https://docs.aws.amazon.com/databrew/latest/dg/what-is.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer needs to move 50TB of data from an on-premises Oracle database to an Amazon Aurora PostgreSQL database with minimal downtime during migration. Which service should be used?",
o:["AWS Database Migration Service (AWS DMS)","AWS Snowball Edge Storage Optimized","AWS DataSync","Amazon S3 Glacier"],
c:["A"],e:"AWS DMS handles database migration with minimal downtime by continuously replicating ongoing changes (CDC - Change Data Capture) from the source database to the target database.",df:"Standard",u:"https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html"},

{d:D,dn:DN,qt:"single",s:"A data stream from sensors arrives in Amazon Kinesis Data Streams. A data engineer wants to run real-time SQL queries over 5-minute sliding time windows to detect anomalous temperature readings. Which service should be used?",
o:["Amazon Managed Service for Apache Flink (formerly Kinesis Data Analytics)","Amazon Athena","Amazon QuickSight","Amazon EKS"],
c:["A"],e:"Amazon Managed Service for Apache Flink allows running real-time SQL or Java applications over streaming data in Kinesis Data Streams to calculate windowed aggregations and detect anomalies.",df:"Standard",u:"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/what-is.html"},
];
