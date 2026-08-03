// Machine Learning Domain Questions for MLA-C01 & MLS-C01
const D1 = "ml-d1", DN1 = "Domain 1: ML Engineering, Data Engineering & Model Operations";
export const mlPool = [
{d:D1,dn:DN1,qt:"single",s:"A machine learning engineer needs to automate a continuous integration and continuous deployment (CI/CD) pipeline for training, evaluating, and registering SageMaker models whenever new data lands in S3. Which service provides native workflow orchestration for ML?",
o:["Amazon SageMaker Pipelines","AWS Step Functions","AWS CodeBuild","AWS Glue Workflows"],
c:["A"],e:"Amazon SageMaker Pipelines is a purpose-built workflow orchestration service for machine learning, enabling model registration, automated retraining, and lineage tracking.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-sdk.html"},

{d:D1,dn:DN1,qt:"single",s:"A data science team needs a centralized repository to store, curate, and share feature sets (such as user embeddings and customer transaction statistics) for training and real-time online inference. Which SageMaker feature should be used?",
o:["Amazon SageMaker Feature Store","Amazon SageMaker Data Wrangler","Amazon SageMaker Model Registry","Amazon SageMaker Canvas"],
c:["A"],e:"Amazon SageMaker Feature Store is a purpose-built repository to store, update, retrieve, and share machine learning features for both batch training and real-time low-latency inference.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store.html"},

{d:D1,dn:DN1,qt:"single",s:"A computer vision model running on Amazon SageMaker real-time endpoints receives high inference request traffic during peak hours and near-zero traffic at night. How can the team optimize endpoint compute costs?",
o:["Configure SageMaker Endpoints Auto Scaling based on InvocationPerInstance metrics","Keep instance count static with On-Demand GPU instances","Use Multi-Model Endpoints with CPU only","Deploy endpoints on dedicated EC2 hosts"],
c:["A"],e:"SageMaker real-time endpoints support automatic scaling, dynamically adjusting the number of instances up or down based on metric targets like InvocationsPerInstance or CPU/GPU utilization.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/endpoint-auto-scaling.html"},

{d:D1,dn:DN1,qt:"single",s:"A machine learning engineer is training a large Deep Learning model with PySpark on Amazon EMR. Training speed is limited by GPU memory constraints. Which SageMaker feature optimizes model training across distributed GPU nodes?",
o:["Amazon SageMaker Distributed Training Libraries (Data Parallel & Model Parallel)","Amazon SageMaker Data Wrangler","Amazon SageMaker Clarify","Amazon SageMaker Neo"],
c:["A"],e:"SageMaker Distributed Training Libraries support Data Parallelism and Model Parallelism, automatically partitioning huge neural networks or training datasets across GPU clusters.",df:"Challenging",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/distributed-training.html"},

{d:D1,dn:DN1,qt:"single",s:"A team wants to optimize a trained TensorFlow computer vision model to run with low latency and minimal memory footprint on edge devices (like AWS Panorama or AWS IoT Greengrass). Which tool compiles ML models?",
o:["Amazon SageMaker Neo","Amazon SageMaker Clarify","Amazon SageMaker Model Monitor","Amazon SageMaker Ground Truth"],
c:["A"],e:"Amazon SageMaker Neo compiles machine learning models into executable C++ binaries optimized for specific hardware platforms (ARM, Intel, Nvidia) without loss of accuracy.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/neo.html"},

{d:D1,dn:DN1,qt:"multiple",s:"A company needs to label 100,000 raw customer support audio recordings for sentiment model training. Which TWO solutions facilitate data labeling with human reviewers and automated ML pre-labeling? (Select TWO.)",
o:["Amazon SageMaker Ground Truth for managed labeling workflows","Amazon Mechanical Turk integration for crowdsourced workforce","AWS Glue DataBrew for manual labeling","AWS Batch for CSV conversion","Amazon Transcribe for real-time translation"],
c:["A","B"],e:"Amazon SageMaker Ground Truth manages data labeling using machine learning, private workforces, or public crowdsourced workforces (Amazon Mechanical Turk).",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/sms.html"},

{d:D1,dn:DN1,qt:"single",s:"A machine learning model deployed in production exhibits performance degradation over time because the distribution of incoming inference data has shifted compared to the training dataset. What is this issue called?",
o:["Data Drift / Concept Drift","Overfitting","Hyperparameter Exhaustion","Gradient Explosion"],
c:["A"],e:"Data drift occurs when input feature distributions change over time (e.g. consumer purchasing habits), causing model accuracy to degrade unless retrained.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-quality.html"},

{d:D1,dn:DN1,qt:"single",s:"Which SageMaker feature continuously monitors production endpoints to detect data drift, concept drift, model quality degradation, and bias drift?",
o:["Amazon SageMaker Model Monitor","Amazon SageMaker Clarify","Amazon SageMaker Feature Store","Amazon SageMaker Studio"],
c:["A"],e:"Amazon SageMaker Model Monitor continuously monitors production endpoint predictions and alerts when data drift or quality degradation occurs.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html"},

{d:D1,dn:DN1,qt:"single",s:"A data science team needs to build an automated hyperparameter tuning job in SageMaker to find optimal learning rate and depth settings for an XGBoost algorithm. Which tuning strategy evaluates parameter combinations efficiently?",
o:["Bayesian Optimization in SageMaker Automatic Model Tuning","Random search with equal weight","Grid search evaluating every integer","Manual trial and error"],
c:["A"],e:"SageMaker Automatic Model Tuning uses Bayesian Optimization to treat hyperparameter tuning as a regression problem, intelligently exploring parameter spaces to find optimal models faster.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning.html"},

{d:D1,dn:DN1,qt:"single",s:"A healthcare ML application requires explaining which features contributed most significantly to a specific patient risk prediction. Which SageMaker tool generates feature attribution values (SHAP values)?",
o:["Amazon SageMaker Clarify","Amazon SageMaker Ground Truth","Amazon SageMaker Canvas","Amazon SageMaker Debugger"],
c:["A"],e:"Amazon SageMaker Clarify calculates SHAP (SHapley Additive exPlanations) values to provide feature attribution scores and explain individual model predictions.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-explainability.html"},
];
