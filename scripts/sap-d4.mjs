// SAP-C02 Domain 4: Accelerate Workload Migration and Modernization (20%)
const D = "sap-d4", DN = "Domain 4: Accelerate Workload Migration and Modernization";
export default [
{d:D,dn:DN,qt:"single",s:"An enterprise needs to migrate 500 physical and virtual servers from an on-premises data center to AWS with minimal downtime. Which service automates block-level continuous replication of physical, virtual, and cloud servers into AWS?",
o:["AWS Application Migration Service (AWS MGN)","AWS DataSync","AWS Database Migration Service (AWS DMS)","AWS Snowball Edge"],
c:["A"],e:"AWS Application Migration Service (MGN) automates lift-and-shift server migration by continuously replicating block-level storage from source physical or virtual servers to AWS.",df:"Standard",u:"https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html"},

{d:D,dn:DN,qt:"single",s:"A financial organization needs to migrate a 50TB Oracle database running on-premises to Amazon Aurora PostgreSQL with near-zero downtime. Which combination of services should be used?",
o:["AWS Schema Conversion Tool (AWS SCT) for schema conversion and AWS Database Migration Service (AWS DMS) for data replication with CDC","AWS DataSync and S3 Glacier","AWS Snowball Edge and Manual SQL DDL Scripts","AWS Storage Gateway Volume Gateway"],
c:["A"],e:"AWS SCT converts the database schema from Oracle to PostgreSQL, and AWS DMS handles heterogeneous data migration with Change Data Capture (CDC) for near-zero downtime cutover.",df:"Challenging",u:"https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Heterogeneous.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise needs to transfer 800TB of historical archive data stored on-premises to Amazon S3. The company has a slow 100 Mbps internet connection. Which data transfer mechanism is MOST practical and cost-effective?",
o:["Order multiple AWS Snowball Edge Storage Optimized appliances","Use AWS DataSync over the internet connection","Use S3 Transfer Acceleration","Set up an AWS Site-to-Site VPN"],
c:["A"],e:"Transferring 800TB over a 100 Mbps internet link would take over 2 years. Using multiple AWS Snowball Edge appliances physically transports petabyte-scale data in days.",df:"Standard",u:"https://docs.aws.amazon.com/snowball/latest/developer-guide/whatissnowball.html"},

{d:D,dn:DN,qt:"single",s:"An organization wants to assess their on-premises data center inventory, identify server dependencies, and estimate AWS infrastructure costs prior to migration. Which AWS service provides automated discovery?",
o:["AWS Application Discovery Service","AWS Migration Hub Orchestrator","AWS Control Tower","AWS Config"],
c:["A"],e:"AWS Application Discovery Service collects server specification, performance, and network connection data from on-premises servers to assist with migration planning.",df:"Standard",u:"https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html"},

{d:D,dn:DN,qt:"single",s:"A company is planning a large-scale migration of 200 applications. They need a single central dashboard to track the progress of migrations across AWS MGN, AWS DMS, and partner tools. Which service provides this tracking?",
o:["AWS Migration Hub","AWS Organizations","AWS Systems Manager Explorer","AWS Service Catalog"],
c:["A"],e:"AWS Migration Hub provides a single location to track the progress of application migrations across multiple AWS and partner tools.",df:"Standard",u:"https://docs.aws.amazon.com/migrationhub/latest/ug/whatis.html"},

{d:D,dn:DN,qt:"multiple",s:"A data engineering team needs to transfer tens of millions of small files (totaling 100TB) from an on-premises NFS storage server to Amazon S3 over an existing AWS Direct Connect link. Which TWO features of AWS DataSync optimize this transfer? (Select TWO.)",
o:["AWS DataSync parallel network transfer architecture optimized for small files","AWS DataSync built-in data integrity verification during transfer","AWS Snowcone physical shipping","AWS Storage Gateway Tape Gateway","AWS CloudTrail Event History logging"],
c:["A","B"],e:"AWS DataSync uses a custom transfer protocol and parallel architecture specifically optimized to accelerate moving millions of small files over Direct Connect while automatically verifying data integrity.",df:"Challenging",u:"https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to containerize a legacy Java monolithic application running on Windows Server EC2 instances and migrate it to Amazon ECS on Fargate. Which tool assists with automatically containerizing applications?",
o:["AWS App2Container (A2C)","AWS Application Migration Service","AWS Elastic Beanstalk","AWS CodeBuild"],
c:["A"],e:"AWS App2Container (A2C) is a command-line tool that analyzes and automatically containerizes Java and .NET applications running on virtual machines into ECS/EKS container images.",df:"Standard",u:"https://docs.aws.amazon.com/app2container/latest/userguide/what-is-a2c.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to continuously sync file storage between an on-premises NAS device and an Amazon EFS file system over AWS Direct Connect for a hybrid workflow. Which service automates continuous file synchronization?",
o:["AWS DataSync","AWS Snowball Edge","AWS Database Migration Service","Amazon S3 Transfer Acceleration"],
c:["A"],e:"AWS DataSync automates moving and synchronizing data between on-premises storage systems (NFS, SMB) and AWS storage services (S3, EFS, FSx) on a scheduled basis.",df:"Standard",u:"https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise is migrating a mainframe COBOL workload to AWS. They want a fully managed environment designed to refactor, test, and run mainframe workloads on AWS. Which service provides this platform?",
o:["AWS Mainframe Modernization","AWS Application Migration Service","AWS Batch","Amazon EMR"],
c:["A"],e:"AWS Mainframe Modernization provides tools and managed runtime environments to migrate, modernize, and run mainframe workloads on AWS cloud infrastructure.",df:"Standard",u:"https://docs.aws.amazon.com/m2/latest/userguide/what-is-m2.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to migrate an existing VMware vSphere environment directly to AWS without converting VM formats or modifying operational management tools. Which joint solution supports native VMware SDDC on AWS?",
o:["VMware Cloud on AWS","AWS Application Migration Service","Amazon EC2 Bare Metal","AWS Outposts"],
c:["A"],e:"VMware Cloud on AWS allows organizations to run their VMware vSphere Software-Defined Data Center (SDDC) environment natively on AWS bare metal infrastructure.",df:"Standard",u:"https://docs.aws.amazon.com/vmware-cloud-on-aws/latest/userguide/welcome.html"},
];
