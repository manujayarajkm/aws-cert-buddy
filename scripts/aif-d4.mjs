// AIF-C01 Domain 4: Guidelines for Responsible AI & Security/Governance (28%)
const D = "aif-d4", DN = "Domain 4: Responsible AI, Security, and Governance";
export default [
{d:D,dn:DN,qt:"single",s:"An enterprise wants to enforce safety policies on generative AI model outputs—filtering out hate speech, profane content, custom blocked words, and sensitive PII. Which feature should be configured in Amazon Bedrock?",
o:["Guardrails for Amazon Bedrock","AWS WAF","Amazon Macie","AWS Shield Advanced"],
c:["A"],e:"Guardrails for Amazon Bedrock provides customizable safeguards to filter out inappropriate content, redact PII, block custom words/topics, and evaluate contextual grounding.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"},

{d:D,dn:DN,qt:"single",s:"A financial regulator requires auditing machine learning models for demographic bias, feature importance, and model explainability. Which Amazon SageMaker feature provides bias detection and model explainability reports?",
o:["Amazon SageMaker Clarify","Amazon SageMaker Model Monitor","Amazon SageMaker Debugger","Amazon SageMaker Neo"],
c:["A"],e:"Amazon SageMaker Clarify provides tools to detect potential bias during data preparation and model training, and generates explainability reports using SHAP feature attribution values.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-fairness-and-explainability.html"},

{d:D,dn:DN,qt:"single",s:"A company uses Amazon Bedrock to generate customer emails. The security team must ensure that prompts submitted to Bedrock are NEVER used to train AWS base foundation models. What is AWS's data privacy guarantee for Amazon Bedrock?",
o:["Customer prompts and completions are encrypted and NOT used to train AWS or third-party base models","Prompts are publicly logged for AI research","Prompts are stored permanently in open-source datasets","Prompts are automatically shared with third-party model providers"],
c:["A"],e:"AWS guarantees that customer data processed by Amazon Bedrock is not used to train or improve AWS base models or third-party foundation models, protecting enterprise privacy.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html"},

{d:D,dn:DN,qt:"single",s:"An attacker inputs malicious text into a Generative AI prompt attempting to bypass system instructions and force the LLM to output restricted corporate data. What type of attack is this?",
o:["Prompt Injection Attack","Denial of Service Attack","Man-in-the-Middle Attack","SQL Injection Attack"],
c:["A"],e:"Prompt Injection attacks attempt to manipulate LLM behavior by injecting overriding instructions into user inputs to bypass guardrails or system prompts.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-components.html"},

{d:D,dn:DN,qt:"single",s:"Which pillar of Responsible AI focuses on explaining HOW a model made a specific prediction so that stakeholders can understand its decision logic?",
o:["Explainability / Transparency","Scalability","Latency Optimization","Cost Efficiency"],
c:["A"],e:"Explainability and Transparency ensure human stakeholders understand model outputs, feature influence, and algorithmic decisions.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-explainability.html"},

{d:D,dn:DN,qt:"multiple",s:"Which TWO security capabilities does Guardrails for Amazon Bedrock provide to protect Generative AI applications? (Select TWO.)",
o:["Automated PII redaction in prompts and completions","Blocking prompt injection attempts using sensitive filter rules","Automatic SQL database query optimization","EC2 instance OS patch installation","VPC Flow Log monitoring"],
c:["A","B"],e:"Guardrails for Amazon Bedrock detects and redacts PII (like SSNs and phone numbers) and filters out harmful prompt injection attempts and undesirable topics.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"},

{d:D,dn:DN,qt:"single",s:"A healthcare AI system must ensure that patients understand when they are interacting with an AI system rather than a human doctor. Which Responsible AI principle does this embody?",
o:["Transparency / Disclosure","Data Anonymization","Latency Reduction","Model Compression"],
c:["A"],e:"Transparency mandates clearly informing users when they are interacting with automated AI agents or reading AI-generated recommendations.",df:"Standard",u:"https://aws.amazon.com/responsible-ai/"},

{d:D,dn:DN,qt:"single",s:"Which Amazon SageMaker feature continuously monitors deployed production models for data drift (changes in input data distribution over time)?",
o:["Amazon SageMaker Model Monitor","Amazon SageMaker Clarify","Amazon SageMaker Studio","Amazon SageMaker Pipelines"],
c:["A"],e:"SageMaker Model Monitor continuously tracks deployed endpoint metrics to detect data drift, concept drift, and quality degradation in production.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise needs to ensure all API calls to Amazon Bedrock are logged for security auditing. Which AWS service captures Bedrock API calls?",
o:["AWS CloudTrail","Amazon CloudFront","AWS Artifact","AWS Glue"],
c:["A"],e:"AWS CloudTrail records all API activity across AWS services, including Amazon Bedrock InvokeModel and CreateKnowledgeBase API calls.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html"},

{d:D,dn:DN,qt:"single",s:"What is the primary risk of Data Poisoning in machine learning?",
o:["An attacker maliciously alters training datasets to introduce backdoor vulnerabilities or corrupt model predictions","The model runs out of GPU memory during training","Data transfer costs increase due to large file sizes","The S3 bucket holding training data gets deleted"],
c:["A"],e:"Data poisoning occurs when an adversary manipulates the training data corpus to compromise model behavior, degrade accuracy, or introduce hidden backdoors.",df:"Standard",u:"https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/security-pillar.html"},
];
