// DOP-C02 Domain 1: SDLC Automation & IaC (39%)
const D = "dop-d1", DN = "Domain 1: SDLC Automation and IaC";
export default [
{d:D,dn:DN,qt:"single",s:"A DevOps team manages a continuous delivery pipeline using AWS CodePipeline. They want to execute a blue/green deployment for an Amazon ECS task set running on AWS Fargate. Which deployment service handles traffic shifting between target groups using ALB rules?",
o:["AWS CodeDeploy","AWS Elastic Beanstalk","AWS CloudFormation","AWS Systems Manager"],
c:["A"],e:"AWS CodeDeploy natively handles blue/green deployments for ECS task sets, using ALB listener rules to manage linear, canary, or all-at-once traffic shifting with automatic rollback.",df:"Standard",u:"https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-ecs.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps engineer needs to enforce static code analysis and security vulnerability scanning during the build stage of an AWS CodePipeline pipeline. Where should these security scanning commands be configured?",
o:["Inside the buildspec.yml file of AWS CodeBuild","In the appspec.yml file of AWS CodeDeploy","In a CloudFormation stack template","In an S3 lifecycle rule"],
c:["A"],e:"AWS CodeBuild executes build specifications defined in `buildspec.yml`. Security tools (like SonarQube, Snyk, or Trivy) run during the build phases (pre_build, build, post_build).",df:"Standard",u:"https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html"},

{d:D,dn:DN,qt:"single",s:"A company uses AWS CodeCommit to host git repositories. Developers must not be allowed to push commits directly to the `main` branch. All changes to `main` must be merged via approved Pull Requests with at least 2 approvals. How is this enforced?",
o:["Create an IAM policy denying codecommit:GitPush on reference `refs/heads/main` and configure Pull Request Approval Templates","Apply an S3 bucket policy on CodeCommit","Use AWS Systems Manager State Manager","Configure a CloudWatch Log Metric Filter"],
c:["A"],e:"Combining IAM policies denying direct pushes to `refs/heads/main` with CodeCommit Approval Rule Templates enforces required PR approvals prior to merging.",df:"Challenging",u:"https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-approval-rule-template.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps engineer wants to provision AWS infrastructure across 100 accounts in an organization using reusable Infrastructure as Code modules defined in TypeScript. Which framework compiles TypeScript into CloudFormation templates?",
o:["AWS Cloud Development Kit (AWS CDK) with CDK Pipelines","AWS SAM CLI","AWS CodeBuild","AWS Config Conformance Packs"],
c:["A"],e:"AWS CDK allows developers to write infrastructure using TypeScript, Python, or Java, synthesizing CloudFormation templates and deploying across accounts with CDK Pipelines.",df:"Standard",u:"https://docs.aws.amazon.com/cdk/v2/guide/cdk_pipeline.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps team needs to host private npm and PyPI software packages internally for developers while caching upstream public packages from npmjs and PyPI. Which AWS service provides a fully managed artifact repository?",
o:["AWS CodeArtifact","AWS CodeCommit","Amazon ECR","AWS Systems Manager Distributor"],
c:["A"],e:"AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations to securely store, publish, and share software packages (npm, PyPI, Maven, NuGet).",df:"Standard",u:"https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html"},

{d:D,dn:DN,qt:"multiple",s:"A DevOps team wants to deploy a serverless application using AWS SAM. Which TWO actions take place during the execution of `sam deploy --guided`? (Select TWO.)",
o:["SAM CLI packages local artifacts, uploads them to S3, and creates an AWS CloudFormation changeset","CloudFormation executes the changeset to provision/update AWS resources","SAM launches EC2 instances locally to test functions","CodeBuild compiles C++ binaries natively","AWS AppRunner provisions container clusters"],
c:["A","B"],e:"`sam deploy` packages application code, uploads zip artifacts to S3, creates a CloudFormation changeset from the transformed SAM template, and executes it to provision resources.",df:"Standard",u:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html"},

{d:D,dn:DN,qt:"single",s:"A company uses AWS CodePipeline. The QA environment approval step requires a senior engineer to manually inspect test results before deployment proceeds to Production. Which CodePipeline action handles manual intervention?",
o:["Manual Approval Action configured with SNS notification topic","AWS Lambda Action with 1-hour sleep timeout","AWS CodeBuild Action with interactive prompt","CloudFormation StackSet Action"],
c:["A"],e:"CodePipeline includes built-in Manual Approval stage actions that publish notifications via SNS and pause pipeline execution until an authorized user approves or rejects the action.",df:"Standard",u:"https://docs.aws.amazon.com/codepipeline/latest/userguide/approvals-approve-or-reject.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps team wants to automatically rollback a deployment in AWS CodeDeploy if an Application Load Balancer target group HTTP 5xx error rate metric exceeds 5% during traffic shifting. How is this configured?",
o:["Attach a CloudWatch Alarm monitoring 5xx error rates to the CodeDeploy Deployment Group automatic rollback configuration","Configure an SQS dead-letter queue","Use AWS Lambda polling every 10 seconds","Add an EC2 status check action"],
c:["A"],e:"CodeDeploy supports automatic rollbacks triggered by CloudWatch alarms. If a specified alarm fires during deployment or traffic shifting, CodeDeploy immediately stops and rolls back.",df:"Standard",u:"https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-automated.html"},

{d:D,dn:DN,qt:"single",s:"A DevOps engineer needs to manage software configuration state (such as installing specific RPM packages and running configuration scripts) on 500 EC2 instances on a recurring schedule. Which feature should be used?",
o:["AWS Systems Manager State Manager with Association documents","AWS CodePipeline","AWS CloudFormation StackSets","AWS Config Rules"],
c:["A"],e:"AWS Systems Manager State Manager automates keeping EC2 instances in a defined state using SSM documents run on a defined schedule (associations).",df:"Standard",u:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to provision infrastructure stacks in member accounts whenever a new account is added to an AWS Organization landing zone. Which service combination automates this account customization?",
o:["AWS Control Tower Account Factory with Customizations for AWS Control Tower (CfCT)","AWS CodeBuild with cron jobs","AWS Systems Manager Parameter Store","AWS Elastic Beanstalk"],
c:["A"],e:"Customizations for AWS Control Tower (CfCT) uses AWS CloudFormation StackSets and AWS Control Tower lifecycle events to automatically deploy resources when new accounts are provisioned.",df:"Challenging",u:"https://docs.aws.amazon.com/controltower/latest/userguide/cfct-overview.html"},
];
