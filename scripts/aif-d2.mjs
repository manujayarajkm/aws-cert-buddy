// AIF-C01 Domain 2: Fundamentals of Generative AI (24%)
const D = "aif-d2", DN = "Domain 2: Fundamentals of Generative AI";
export default [
{d:D,dn:DN,qt:"single",s:"Which neural network architecture introduced the self-attention mechanism, forming the foundation of modern Large Language Models (LLMs) like Claude, Llama, and GPT?",
o:["Transformer architecture","Convolutional Neural Networks (CNN)","Recurrent Neural Networks (RNN)","Multi-Layer Perceptron (MLP)"],
c:["A"],e:"Transformers rely on self-attention mechanisms to process sequential data in parallel, capturing long-range dependencies far more effectively than traditional RNNs or CNNs.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"},

{d:D,dn:DN,qt:"single",s:"A developer wants to ground a Large Language Model's responses in an enterprise's private knowledge base (S3 documents) without retraining or fine-tuning the base model. Which architecture pattern should be used?",
o:["Retrieval-Augmented Generation (RAG)","Full Model Fine-Tuning","Supervised Pre-training","Prompt Injection"],
c:["A"],e:"RAG retrieves relevant document chunks from a vector database (knowledge base) and appends them into the prompt context sent to the LLM, grounding responses without model retraining.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"},

{d:D,dn:DN,qt:"single",s:"A user notices that a Generative AI chatbot confidently generates plausible-sounding but factually incorrect statements. What is this phenomenon called in LLMs?",
o:["Hallucination","Catastrophic Forgetting","Underfitting","Model Drift"],
c:["A"],e:"Hallucination occurs when a generative AI model generates content that appears plausible and confident but is factually inaccurate or ungrounded in source data.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"},

{d:D,dn:DN,qt:"single",s:"Which parameter in text generation foundation models controls the randomness/creativity of generated output tokens?",
o:["Temperature","Top-K","Batch Size","Learning Rate"],
c:["A"],e:"Temperature adjusts the probability distribution of output tokens. Lower temperature (e.g. 0.1) makes output deterministic and focused; higher temperature (e.g. 0.8) increases variety and randomness.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html"},

{d:D,dn:DN,qt:"single",s:"A company needs to adapt an open-weight foundation model to follow specific domain terminology and formatting instructions by training it on a labeled dataset of 5,000 prompt-response pairs. Which technique is this?",
o:["Instruction Fine-Tuning (Supervised Fine-Tuning)","Retrieval-Augmented Generation","Zero-Shot Prompting","Pre-training from scratch"],
c:["A"],e:"Supervised Fine-Tuning (SFT) updates model weights using a curated dataset of labeled prompt-response pairs to specialize the model for specific tasks or domain styles.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html"},

{d:D,dn:DN,qt:"multiple",s:"Which TWO techniques can help mitigate hallucinations in foundation model outputs? (Select TWO.)",
o:["Implementing Retrieval-Augmented Generation (RAG) with verified context","Using Guardrails for Amazon Bedrock with contextual grounding checks","Increasing temperature to 1.0","Removing system prompts completely","Decreasing vector embedding dimensions"],
c:["A","B"],e:"RAG provides authoritative reference documents in the context window. Contextual Grounding checks in Bedrock Guardrails verify that model responses are directly supported by the retrieved context.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-contextual-grounding.html"},

{d:D,dn:DN,qt:"single",s:"What is the primary function of a Vector Embedding in generative AI applications?",
o:["To represent unstructured text, images, or audio as dense numerical vectors preserving semantic meaning","To compress JPEG images into low-resolution previews","To encrypt prompt data in transit using AES-256","To compile Python code into bytecode execution format"],
c:["A"],e:"Vector embeddings convert tokens or unstructured assets into high-dimensional vectors where semantically similar concepts (e.g. 'king' and 'queen') lie close together in vector space.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-embeddings.html"},

{d:D,dn:DN,qt:"single",s:"A developer writes a prompt that includes zero examples and directly asks the LLM to classify customer sentiment. What prompting technique is being used?",
o:["Zero-Shot Prompting","Few-Shot Prompting","Chain-of-Thought Prompting","ReAct Prompting"],
c:["A"],e:"Zero-Shot Prompting provides no demonstration examples in the prompt, relying entirely on the model's pre-trained knowledge to perform the requested task.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html"},

{d:D,dn:DN,qt:"single",s:"Which prompting technique instructs a Large Language Model to break down complex reasoning steps explicitly (e.g., 'Let's think step by step') before arriving at a final answer?",
o:["Chain-of-Thought (CoT) Prompting","Self-Consistency Prompting","Directional Stimulus Prompting","Generated Knowledge Prompting"],
c:["A"],e:"Chain-of-Thought (CoT) prompting encourages foundation models to generate intermediate reasoning steps, significantly improving performance on complex math, logic, and multi-step tasks.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html"},

{d:D,dn:DN,qt:"single",s:"Which parameter limits the pool of candidate tokens evaluated during generation to the top K highest probability tokens?",
o:["Top-K","Temperature","Top-P (Nucleus Sampling)","Max Tokens"],
c:["A"],e:"Top-K sampling restricts token selection to the K highest-probability tokens at each generation step, filtering out unlikely tail tokens.",df:"Standard",u:"https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html"},
];
