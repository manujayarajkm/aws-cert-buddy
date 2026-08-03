// AIF-C01 Domain 3: Applications of Foundation Models (28%)
const D = "aif-d3", DN = "Domain 3: Applications of Foundation Models";
export default [
{d:D,dn:DN,qt:"single",s:"A developer wants to build a generative AI application that accesses leading foundation models (Anthropic Claude, Meta Llama, Amazon Titan) through a unified API without managing infrastructure. Which AWS service should be used?",
o:["Amazon Bedrock","Amazon SageMaker JumpStart","Amazon Lex","AWS HealthOmics"],
c:["A"],e:"Amazon Bedrock is a fully managed service that offers choice of high-performing foundation models from leading AI startups and Amazon via a single API, along with built-in security, RAG, and guardrails.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"},

{d:D,dn:DN,qt:"single",s:"Which feature of Amazon Bedrock allows building multi-step conversational AI assistants that can automatically execute API tasks (such as looking up order status in a database or placing an order)?",
o:["Agents for Amazon Bedrock","Knowledge Bases for Amazon Bedrock","Guardrails for Amazon Bedrock","Model Evaluation on Amazon Bedrock"],
c:["A"],e:"Agents for Amazon Bedrock orchestrate multi-step tasks across company systems by breaking down user requests, invoking API actions, and interacting with knowledge bases autonomously.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"},

{d:D,dn:DN,qt:"single",s:"An enterprise software developer needs an AI coding assistant integrated into VS Code to generate code suggestions, complete inline functions, and perform security scans on application source code. Which AWS service provides this?",
o:["Amazon Q Developer","Amazon Bedrock Studio","Amazon SageMaker Canvas","AWS CodeArtifact"],
c:["A"],e:"Amazon Q Developer (formerly Amazon CodeWhisperer) is a generative AI conversational assistant and inline code generator that integrates into IDEs to write code, debug errors, and scan for security vulnerabilities.",df:"Standard",u:"https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is-amazonq.html"},

{d:D,dn:DN,qt:"single",s:"Which Amazon Bedrock capability enables comparing output quality across multiple foundation models using automated metrics (like ROUGE and BERTScore) or human evaluation panels?",
o:["Amazon Bedrock Model Evaluation","Amazon Bedrock Guardrails","Amazon SageMaker Clarify","Amazon Q Business"],
c:["A"],e:"Amazon Bedrock Model Evaluation allows comparing and evaluating foundation models for specific use cases using built-in datasets/metrics or human reviewers.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to enable employees to ask natural language questions over internal company wikis, Jira tickets, and SharePoint files. Which generative AI service provides a fully managed enterprise assistant with out-of-the-box connectors?",
o:["Amazon Q Business","Amazon Kendra","Amazon Lex","Amazon SageMaker Studio"],
c:["A"],e:"Amazon Q Business is a fully managed generative AI assistant for employees that connects to internal data sources (SharePoint, Salesforce, S3) with role-based access control.",df:"Standard",u:"https://docs.aws.amazon.com/amazonq/latest/business-ug/what-is-amazonq-business.html"},

{d:D,dn:DN,qt:"multiple",s:"A developer wants to set up a RAG pipeline in Amazon Bedrock. Which TWO components are required to configure Knowledge Bases for Amazon Bedrock? (Select TWO.)",
o:["A vector database (such as Amazon OpenSearch Serverless vector engine or Pinecone)","An S3 data source containing enterprise documents","An EC2 GPU cluster running PyTorch","AWS Batch container jobs","Amazon SageMaker HyperPod"],
c:["A","B"],e:"Knowledge Bases for Amazon Bedrock requires an S3 bucket with source documents and a vector database (like OpenSearch Serverless, Pinecone, or Aurora PostgreSQL vector) to index embeddings.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html"},

{d:D,dn:DN,qt:"single",s:"A developer needs to deploy a fine-tuned open-source Hugging Face model on Amazon SageMaker with dedicated GPU compute endpoints. Which SageMaker feature provides pre-built model cards and 1-click deployment for foundation models?",
o:["Amazon SageMaker JumpStart","Amazon SageMaker Pipelines","Amazon SageMaker Data Wrangler","Amazon SageMaker Feature Store"],
c:["A"],e:"SageMaker JumpStart provides a hub of pre-trained foundation models, algorithms, and end-to-end solution templates that can be deployed with a few clicks.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/studio-jumpstart.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides pre-trained text-to-speech capabilities that convert written content into natural-sounding spoken audio in dozens of languages?",
o:["Amazon Polly","Amazon Transcribe","Amazon Translate","Amazon Comprehend"],
c:["A"],e:"Amazon Polly turns text into lifelike speech using advanced deep learning technologies (including neural TTS), outputting audio formats like MP3.",df:"Standard",u:"https://docs.aws.amazon.com/polly/latest/dg/what-is-polly.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service converts spoken audio streams (such as customer service call recordings) into written text transcripts?",
o:["Amazon Transcribe","Amazon Polly","Amazon Lex","Amazon Comprehend"],
c:["A"],e:"Amazon Transcribe uses automatic speech recognition (ASR) deep learning models to convert speech into text quickly and accurately.",df:"Standard",u:"https://docs.aws.amazon.com/transcribe/latest/dg/what-is-transcribe.html"},

{d:D,dn:DN,qt:"single",s:"A team wants to quickly build interactive conversational AI chatbots with natural language understanding (NLU) for customer support web portals. Which service provides natural language understanding and dialogue management?",
o:["Amazon Lex","Amazon Bedrock","Amazon Rekognition","AWS App Runner"],
c:["A"],e:"Amazon Lex is a fully managed service for building conversational interfaces (chatbots) into applications using voice and text, powered by NLU and speech recognition.",df:"Standard",u:"https://docs.aws.amazon.com/lexv2/latest/dg/what-is-lex.html"},
];
