// DVA-C02 Domain 1: Development with AWS Services (32%)
const D = "dva-d1", DN = "Domain 1: Development with AWS Services";
export default [
{d:D,dn:DN,qt:"single",s:"A developer is building a serverless web application. The application needs to process incoming requests via REST endpoints, validate the request body, and store records in DynamoDB. Which combination of services should be used?",
o:["API Gateway REST API, AWS Lambda, and Amazon DynamoDB","Application Load Balancer, Amazon EC2, and Amazon RDS","Amazon CloudFront, AWS Elastic Beanstalk, and Amazon ElastiCache","API Gateway WebSocket API, AWS Fargate, and Amazon DocumentDB"],
c:["A"],e:"API Gateway provides REST API endpoints with built-in request validation. AWS Lambda handles backend processing logic, and DynamoDB provides serverless key-value storage. This forms the standard serverless application architecture.",df:"Standard",u:"https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html"},

{d:D,dn:DN,qt:"single",s:"A developer needs to implement optimistic locking in Amazon DynamoDB to ensure that concurrent updates to an item do not overwrite each other. Which feature should be used?",
o:["DynamoDB Transactions","Condition expressions using a version attribute","DynamoDB Accelerator (DAX)","Global Secondary Indexes"],
c:["B"],e:"Optimistic locking with condition expressions (e.g., attribute_exists or version = :expectedVersion) ensures an update only succeeds if the item's version attribute has not changed since it was read. If another process updated it, the conditional check fails.",df:"Standard",u:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.ConditionalUpdate"},

{d:D,dn:DN,qt:"single",s:"An application sends user activity events to an Amazon SQS queue. The developer wants to process events in parallel while ensuring that events for the same user ID are processed sequentially in the exact order received. What should be configured?",
o:["SQS Standard queue with a custom sorting attribute","SQS FIFO queue with the MessageGroupId set to the user ID","SNS topic with multiple SQS subscriptions","SQS Standard queue with short polling"],
c:["B"],e:"SQS FIFO queues preserve message ordering within a MessageGroupId group. By setting MessageGroupId to the user ID, events for that specific user are strictly ordered and processed sequentially, while events for different users can be processed concurrently.",df:"Standard",u:"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-message-group-id.html"},

{d:D,dn:DN,qt:"single",s:"A developer is creating an AWS Lambda function that processes video files from S3. The execution time often exceeds 5 minutes. What is the maximum timeout that can be configured for a Lambda function?",
o:["5 minutes","10 minutes","15 minutes","30 minutes"],
c:["C"],e:"AWS Lambda functions have a maximum configurable execution timeout of 15 minutes (900 seconds). For tasks exceeding 15 minutes, AWS Step Functions, AWS Batch, or ECS tasks should be used.",df:"Standard",u:"https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html"},

{d:D,dn:DN,qt:"multiple",s:"A developer wants to upload large 5GB files to Amazon S3 using the AWS SDK. Which TWO techniques optimize the upload speed and reliability? (Select TWO.)",
o:["Use S3 Multipart Upload API to upload parts in parallel","Use S3 Transfer Acceleration to route data through AWS edge locations","Enable S3 Object Lock before initiating the upload","Use client-side encryption with a local static key","Store the file in DynamoDB first before moving to S3"],
c:["A","B"],e:"Multipart Upload allows files larger than 100MB to be split and uploaded concurrently in parts, automatically retrying failed parts. S3 Transfer Acceleration leverages CloudFront's edge network for faster data transfer over long distances.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html"},

{d:D,dn:DN,qt:"single",s:"A web application receives unpredictable bursts of read requests for popular user profiles stored in DynamoDB. The developer wants to achieve microsecond read latency without increasing provisioned read capacity. Which service should be added?",
o:["Amazon ElastiCache for Redis","Amazon DynamoDB Accelerator (DAX)","Amazon CloudFront","Amazon RDS Proxy"],
c:["B"],e:"DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache specifically built for DynamoDB. It reduces read latency to microseconds and is API-compatible, requiring no application rewrite.",df:"Standard",u:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html"},

{d:D,dn:DN,qt:"single",s:"A developer is using AWS Step Functions to orchestrate a order processing workflow. Which state type should be used to execute multiple sub-tasks concurrently?",
o:["Choice state","Task state","Parallel state","Pass state"],
c:["C"],e:"A Parallel state in Step Functions allows execution of multiple branch state machines concurrently. Execution continues only after all parallel branches complete.",df:"Standard",u:"https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-parallel-state.html"},

{d:D,dn:DN,qt:"single",s:"An application publishes order notification events to an Amazon SNS topic. Three different microservices need to receive all messages. How should this fan-out architecture be configured?",
o:["Create an SQS queue for each microservice and subscribe all 3 queues to the SNS topic","Have each microservice poll the SNS topic directly using the AWS SDK","Route SNS events directly to an S3 bucket and trigger microservices via S3 events","Use API Gateway to broadcast SNS messages to microservices"],
c:["A"],e:"The SNS fan-out pattern subscribes multiple SQS queues to a single SNS topic. When a message is published to the topic, SNS delivers a copy to each queue, allowing the microservices to process messages independently and asynchronously.",df:"Standard",u:"https://docs.aws.amazon.com/sns/latest/dg/sns-common-scenarios.html"},

{d:D,dn:DN,qt:"single",s:"A developer needs to run a lightweight containerized web API with automatic scaling and no server management. Which AWS service allows deploying container images directly from a source code repository or container registry with minimal configuration?",
o:["AWS App Runner","Amazon EC2","AWS Elastic Beanstalk (EC2 mode)","Amazon EMR"],
c:["A"],e:"AWS App Runner makes it easy to quickly deploy containerized web applications and APIs from container images or source code directly to AWS with zero infrastructure configuration required.",df:"Standard",u:"https://docs.aws.amazon.com/apprunner/latest/dg/what-is-apprunner.html"},

{d:D,dn:DN,qt:"single",s:"A developer wants to allow frontend web users to upload files directly to an S3 bucket without routing through the backend server or exposing AWS credentials. What is the BEST solution?",
o:["Generate an S3 Presigned URL on the backend and return it to the frontend","Pass AWS access keys to the browser client securely","Configure an S3 Bucket Policy allowing anonymous public PUT access","Use AWS STS to create long-term IAM users for each website visitor"],
c:["A"],e:"Presigned URLs grant temporary permissions to perform specific S3 operations (such as PUT uploads). The backend generates a signed URL using IAM credentials and hands it to the client, keeping credentials safe.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html"},
];
