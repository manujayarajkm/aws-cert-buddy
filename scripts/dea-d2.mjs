// DEA-C01 Domain 2: Data Store Management (26%)
const D = "dea-d2", DN = "Domain 2: Data Store Management";
export default [
{d:D,dn:DN,qt:"single",s:"A data warehouse team uses Amazon Redshift. Queries filtering by transaction_date are running slowly across a 10-billion-row fact table. How can the data engineer optimize query performance for date range queries?",
o:["Set transaction_date as the Sort Key for the table","Set transaction_date as the Primary Key for the table","Change the distribution style to DISTSTYLE ALL","Enable Redshift Concurrency Scaling"],
c:["A"],e:"In Amazon Redshift, setting a column frequently used in WHERE clauses (like transaction_date) as a Sort Key enables zone maps to skip irrelevant data blocks during query execution, greatly improving query speed.",df:"Standard",u:"https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer needs to query historical sales data stored in S3 Parquet files directly from an existing Amazon Redshift cluster without loading the data into Redshift tables. Which Redshift feature enables this?",
o:["Amazon Redshift Spectrum","Amazon Redshift Data API","Amazon Redshift Federated Query","Amazon Redshift Auto-Copy"],
c:["A"],e:"Amazon Redshift Spectrum enables running SQL queries against exabytes of unstructured/semi-structured data stored in S3 without loading it into Redshift storage tables.",df:"Standard",u:"https://docs.aws.amazon.com/redshift/latest/dg/c-getting-started-using-spectrum.html"},

{d:D,dn:DN,qt:"single",s:"A company stores petabytes of log data in Amazon S3. The data team queries the data using Amazon Athena. Queries currently scan large amounts of data, leading to high query costs. What partitioning strategy should be used to reduce data scan volume?",
o:["Partition S3 storage paths by date hierarchy (e.g., year=YYYY/month=MM/day=DD) and add partitions to Athena","Store all logs in a single flat S3 directory prefix","Compress logs using ZIP format instead of Snappy","Convert S3 bucket storage class to S3 Glacier Deep Archive"],
c:["A"],e:"Partitioning data by date (year/month/day) in S3 path keys allows Athena query engine to perform partition pruning, scanning only the specific directory folders needed for the query range.",df:"Standard",u:"https://docs.aws.amazon.com/athena/latest/ug/partitions.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer is designing an S3 data lake table layout that requires ACID transactional capabilities, time travel, and schema evolution for concurrent updates. Which open-source table format supported natively by AWS Glue and Athena should be chosen?",
o:["Apache Iceberg","Apache Hudi","Delta Lake","CSV format"],
c:["A"],e:"Apache Iceberg is an open table format designed for huge analytic tables. It brings ACID transactions, time travel queries, and schema evolution to data lakes on Amazon S3 and is supported natively across Glue, Athena, EMR, and Redshift.",df:"Standard",u:"https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg.html"},

{d:D,dn:DN,qt:"single",s:"Which distribution style in Amazon Redshift duplicates small dimension tables across all compute nodes to eliminate network data shuffling during joins with large fact tables?",
o:["DISTSTYLE ALL","DISTSTYLE EVEN","DISTSTYLE KEY","DISTSTYLE AUTO"],
c:["A"],e:"DISTSTYLE ALL copies the entire table to every compute node. This is ideal for small, infrequently updated dimension tables because joins with large fact tables can execute locally on each node without data movement across the network.",df:"Standard",u:"https://docs.aws.amazon.com/redshift/latest/dg/c_choosing_dist_sort.html"},

{d:D,dn:DN,qt:"multiple",s:"A data engineer wants to optimize Athena query cost and performance for data stored in Amazon S3. Which TWO file formats provide columnar storage and compressed data blocks recommended for Athena? (Select TWO.)",
o:["Apache Parquet","Apache ORC","Uncompressed JSON","Plain text CSV","XML format"],
c:["A","B"],e:"Apache Parquet and Apache ORC are columnar storage formats that compress data efficiently and allow Athena to read only the columns referenced in a query, reducing data scanned and query execution cost.",df:"Standard",u:"https://docs.aws.amazon.com/athena/latest/ug/columnar-storage.html"},

{d:D,dn:DN,qt:"single",s:"A team needs an in-memory cache to store frequent SQL query result sets from Amazon RDS PostgreSQL with sub-millisecond read latency. Which service should be implemented?",
o:["Amazon ElastiCache for Redis","Amazon MemoryDB for Redis","Amazon CloudFront","Amazon RDS Proxy"],
c:["A"],e:"Amazon ElastiCache for Redis provides an in-memory data store with sub-millisecond response times, making it ideal for caching database query results and reducing backend database read load.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html"},

{d:D,dn:DN,qt:"single",s:"An application requires a database that supports flexible document schemas (JSON) with full MongoDB compatibility and automated scaling. Which AWS database service should be used?",
o:["Amazon DocumentDB (with MongoDB compatibility)","Amazon DynamoDB","Amazon RDS PostgreSQL","Amazon Keyspaces (for Apache Cassandra)"],
c:["A"],e:"Amazon DocumentDB is a fully managed document database service designed to be compatible with MongoDB, storing data as JSON documents with automated scaling and Multi-AZ replication.",df:"Standard",u:"https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer needs to join operational transactional data in Amazon RDS MySQL directly with analytical data in Amazon Redshift without running complex manual ETL export pipelines. Which feature should be used?",
o:["Amazon Redshift Federated Query","Amazon Redshift Spectrum","AWS DMS Replication Task","Amazon Athena Federated Query"],
c:["A"],e:"Amazon Redshift Federated Query allows users to query and join data directly across Redshift databases, operational databases (like RDS PostgreSQL and RDS MySQL), and S3 data lakes.",df:"Standard",u:"https://docs.aws.amazon.com/redshift/latest/dg/federated-overview.html"},

{d:D,dn:DN,qt:"single",s:"A data engineer is configuring an S3 lifecycle policy for a data lake bucket. Raw telemetry data must be kept in S3 Standard for 30 days, moved to S3 Standard-IA for 90 days, and then permanently deleted after 365 days. How is this configured?",
o:["Define Lifecycle Transition rules for 30 days to Standard-IA and Expiration rule for 365 days","Use S3 Intelligent-Tiering with manual object moves","Create an AWS Lambda function running on a cron schedule to delete objects","Use S3 Object Lock compliance mode"],
c:["A"],e:"S3 Lifecycle policies allow defining Transition actions to move objects between storage classes after a specified period, and Expiration actions to permanently delete objects after a specified number of days.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html"},
];
