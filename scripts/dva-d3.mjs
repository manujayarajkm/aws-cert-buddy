// DVA-C02 Domain 3: Deployment (24%)
const D = "dva-d3", DN = "Domain 3: Deployment";
export default [
{d:D,dn:DN,qt:"single",s:"A developer is using AWS CodeDeploy to deploy an update to an application running on EC2. The deployment must update instances one at a time, ensuring that at least half the instances remain operational throughout. Which deployment configuration should be used?",
o:["CodeDeployDefault.OneAtATime","CodeDeployDefault.HalfAtATime","CodeDeployDefault.AllAtOnce","CodeDeployDefault.Canary10Percent30Minutes"],
c:["A"],e:"CodeDeployDefault.OneAtATime deploys the revision to one instance at a time. As long as the fleet size is >= 2, at least half of the instances remain online during the deployment.",df:"Standard",u:"https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html"},

{d:D,dn:DN,qt:"single",s:"A developer is building a SAM (Serverless Application Model) template. Which section of the SAM template defines the AWS resources to be provisioned?",
o:["Parameters","Resources","Globals","Transform"],
c:["B"],e:"Like CloudFormation templates, the Resources section in AWS SAM templates defines the AWS resources (such as AWS::Serverless::Function, AWS::Serverless::SimpleTable, etc.) to provision.",df:"Standard",u:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html"},

{d:D,dn:DN,qt:"single",s:"A developer wants to implement a canary deployment strategy for an AWS Lambda function using AWS SAM and AWS CodeDeploy. Which SAM deployment preference shifts 10% of traffic to the new version first, then shifts the remaining 90% after 10 minutes?",
o:["Canary10Percent10Minutes","Linear10Percent10Minutes","AllAtOnce","PreTrafficHook"],
c:["A"],e:"Canary10Percent10Minutes shifts 10 percent of traffic to the new version. After a 10-minute bake period without alarms, the remaining 90 percent is shifted.",df:"Standard",u:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html"},

{d:D,dn:DN,qt:"single",s:"Which file in an application source code repository instructs AWS CodeDeploy how to deploy the application onto EC2 or on-premises instances?",
o:["buildspec.yml","appspec.yml","template.yaml","dockerrun.aws.json"],
c:["B"],e:"The AppSpec file (appspec.yml or appspec.json) is used by AWS CodeDeploy to define deployment actions, file mappings, and lifecycle hooks.",df:"Standard",u:"https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html"},

{d:D,dn:DN,qt:"single",s:"A developer uses AWS CodeBuild to compile code and build Docker images. Where are the build commands and environment phases defined?",
o:["appspec.yml","buildspec.yml","Dockerfile","samconfig.toml"],
c:["B"],e:"AWS CodeBuild uses a buildspec.yml file located in the root of the source directory to define phases (install, pre_build, build, post_build) and run shell commands.",df:"Standard",u:"https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html"},

{d:D,dn:DN,qt:"multiple",s:"A developer wants to containerize a web app and store the Docker images securely in a private repository. Which TWO services should be used together? (Select TWO.)",
o:["Amazon Elastic Container Registry (ECR) for hosting private Docker images","AWS CodeBuild or local Docker CLI to build and push images to ECR","AWS CodeArtifact for storing npm packages","Amazon S3 static website hosting","AWS Elastic Beanstalk single instance mode"],
c:["A","B"],e:"Amazon ECR is a managed Docker container registry. AWS CodeBuild or Docker CLI can authenticate with ECR to build, tag, and push container images into ECR repositories.",df:"Standard",u:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-create.html"},

{d:D,dn:DN,qt:"single",s:"A developer is deploying a multi-container application using Elastic Beanstalk. Which configuration file specifies the container definitions and volume mounts?",
o:["Dockerrun.aws.json","buildspec.yml","Procfile","cron.yaml"],
c:["A"],e:"For Elastic Beanstalk multi-container or ECS environments, Dockerrun.aws.json specifies how Docker containers are configured and deployed.",df:"Standard",u:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/single-container-docker-v2.html"},

{d:D,dn:DN,qt:"single",s:"A developer wants to provision AWS infrastructure using TypeScript instead of writing raw JSON/YAML templates. Which framework should be used?",
o:["AWS Cloud Development Kit (AWS CDK)","AWS Serverless Application Model (AWS SAM)","AWS CloudFormation CLI","AWS Amplify SDK"],
c:["A"],e:"AWS CDK allows developers to define cloud infrastructure using familiar programming languages like TypeScript, Python, Java, and C#.",df:"Standard",u:"https://docs.aws.amazon.com/cdk/v2/guide/home.html"},

{d:D,dn:DN,qt:"single",s:"What happens if a CloudFormation stack creation fails while creating one of the resources in the stack by default?",
o:["Failed resources are skipped and stack creation completes","CloudFormation automatically rolls back the entire stack, deleting created resources","The stack stays in CREATE_IN_PROGRESS state indefinitely","The stack converts into a Drift Detection mode"],
c:["B"],e:"By default, if a resource creation fails during stack creation, AWS CloudFormation triggers a rollback (ROLLBACK_IN_PROGRESS) and deletes all resources created up to that point.",df:"Standard",u:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html"},

{d:D,dn:DN,qt:"single",s:"A developer wants to test Lambda functions locally before deploying to AWS. Which CLI tool provides local execution capabilities by emulating Lambda and API Gateway?",
o:["AWS SAM CLI","AWS CLI v2","AWS Amplify CLI","AWS CDK CLI"],
c:["A"],e:"AWS SAM CLI provides commands like `sam local invoke` and `sam local start-api` to run and debug serverless applications locally using Docker containers.",df:"Standard",u:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-debugging.html"},
];
