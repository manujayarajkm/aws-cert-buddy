// DVA-C02 Domain 2: Security (26%)
const D = "dva-d2", DN = "Domain 2: Security";
export default [
{d:D,dn:DN,qt:"single",s:"A Lambda function requires database access credentials. The credentials must be stored securely, encrypted at rest, and automatically rotated every 30 days. Which service should the developer use?",
o:["AWS Systems Manager Parameter Store (String parameter)","AWS Secrets Manager with auto-rotation enabled","Environment variables inside the Lambda function configuration","An S3 object encrypted with SSE-S3"],
c:["B"],e:"AWS Secrets Manager is designed specifically to manage, rotate, and retrieve secrets such as database credentials securely. It natively supports built-in auto-rotation using AWS Lambda functions.",df:"Standard",u:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},

{d:D,dn:DN,qt:"single",s:"An application running on an Amazon EC2 instance needs to access an S3 bucket and an SQS queue. Which approach is MOST secure for authenticating the application?",
o:["Hardcode IAM access keys in the application configuration file","Store IAM access keys in environment variables on the instance","Assign an IAM Role to the EC2 instance via an instance profile","Use AWS STS AssumeRole with long-term IAM credentials stored in code"],
c:["C"],e:"Assigning an IAM Role to an EC2 instance profile automatically provides temporary credentials via the Instance Metadata Service (IMDS). This avoids storing or managing static keys on disk.",df:"Standard",u:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"},

{d:D,dn:DN,qt:"single",s:"A developer is using AWS KMS to encrypt sensitive application data locally before saving it to a database. Which API operation should be used to obtain an encryption key for local envelope encryption?",
o:["kms:Encrypt","kms:GenerateDataKey","kms:Decrypt","kms:CreateKey"],
c:["B"],e:"kms:GenerateDataKey returns a plaintext data key and an encrypted copy of that key (encrypted by a KMS CMK). The application uses the plaintext key to encrypt data locally, then discards the plaintext key and stores the encrypted data key alongside the data.",df:"Standard",u:"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys"},

{d:D,dn:DN,qt:"single",s:"A mobile application requires authenticated access to user-specific folders in Amazon S3 after signing in with Google or Facebook. Which service provides federated identity management and temporary AWS credentials?",
o:["Amazon Cognito User Pools and Identity Pools","AWS IAM Identity Center","AWS STS GetSessionToken","Amazon API Gateway Lambda Authorizer"],
c:["A"],e:"Cognito User Pools handle user sign-in and social identity federation. Cognito Identity Pools convert identity tokens into temporary, scoped IAM credentials for accessing AWS resources like S3.",df:"Standard",u:"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html"},

{d:D,dn:DN,qt:"multiple",s:"A developer wants to protect an Amazon API Gateway REST API from unauthorized access. Which TWO authentication/authorization methods can be implemented natively? (Select TWO.)",
o:["IAM Permissions (AWS_IAM authorization)","Amazon Cognito User Pools authorizers","Basic Authentication headers stored in plaintext","Hardcoded IP whitelist in API Gateway route definitions","AWS KMS Key Policies attached directly to API resources"],
c:["A","B"],e:"API Gateway natively supports AWS_IAM authorization (for signing requests with Signature Version 4) and Amazon Cognito User Pools authorizers (using JWT tokens). Custom Lambda authorizers are also supported.",df:"Standard",u:"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html"},

{d:D,dn:DN,qt:"single",s:"A developer needs to encrypt payload data sent between an Application Load Balancer and backend EC2 instances. Which protocol configuration ensures end-to-end encryption in transit?",
o:["Configure an HTTP listener on ALB and HTTP target group","Configure an HTTPS listener on ALB and HTTPS target group with valid certificates on targets","Enable SSE-KMS on the target EC2 EBS root volumes","Use VPC Flow Logs to encrypt network packets"],
c:["B"],e:"End-to-end transit encryption requires an HTTPS listener on the ALB to encrypt client-to-ALB traffic, and an HTTPS target group so ALB re-encrypts traffic sent to backend EC2 instances.",df:"Standard",u:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html"},

{d:D,dn:DN,qt:"single",s:"A developer receives an AccessDenied error when attempting to read an encrypted object from S3. The object was encrypted using SSE-KMS with a customer managed key. The developer has s3:GetObject permission. What missing permission caused the error?",
o:["kms:Decrypt permission on the KMS key policy","s3:PutObject permission on the S3 bucket policy","kms:GenerateDataKey permission on the KMS key policy","iam:PassRole permission on the developer's IAM policy"],
c:["A"],e:"When reading an SSE-KMS encrypted object in S3, the principal needs both s3:GetObject permission on the object and kms:Decrypt permission on the KMS key used to encrypt it.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html"},

{d:D,dn:DN,qt:"single",s:"Which environment variable in AWS Lambda provides temporary credentials automatically to the AWS SDK running inside the function execution environment?",
o:["AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_SESSION_TOKEN","AWS_LAMBDA_FUNCTION_NAME and AWS_REGION","LAMBDA_SECURITY_TOKEN","AWS_KMS_KEY_ARN"],
c:["A"],e:"Lambda automatically injects AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_SESSION_TOKEN into the function's execution environment. The AWS SDK uses these automatically.",df:"Standard",u:"https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html"},

{d:D,dn:DN,qt:"single",s:"A developer needs to store configuration parameters (like API URLs) and encrypted strings (like database passwords) centrally for multiple microservices. The solution must be low-cost and integrate natively with IAM. Which service should be used?",
o:["AWS Systems Manager Parameter Store","AWS Key Management Service","Amazon DynamoDB","AWS Secrets Manager"],
c:["A"],e:"SSM Parameter Store allows storing plain text strings and encrypted SecureString parameters (via KMS). It is free for standard parameters and low-cost for advanced parameters, making it ideal for general app parameters.",df:"Standard",u:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html"},

{d:D,dn:DN,qt:"single",s:"A developer wants to restrict access to an API Gateway endpoint to requests coming only from a specific Amazon CloudFront distribution. How can this be accomplished?",
o:["Configure CloudFront to send a custom secret header and validate it in an API Gateway Lambda Authorizer or WAF","Use Security Groups on API Gateway to allow only CloudFront IP ranges","Enable S3 Bucket Policies on API Gateway","Attach an IAM Role directly to the CloudFront distribution"],
c:["A"],e:"To restrict API Gateway to CloudFront, you can add a custom header in CloudFront origin settings and verify that header in API Gateway using AWS WAF, a custom Lambda authorizer, or resource policies.",df:"Standard",u:"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-s3-corners.html"},
];
