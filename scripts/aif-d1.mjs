// AIF-C01 Domain 1: Fundamentals of AI and ML (20%)
const D = "aif-d1", DN = "Domain 1: Fundamentals of AI and ML";
export default [
{d:D,dn:DN,qt:"single",s:"A machine learning team is training a supervised classification model. During testing, the model achieves 99% accuracy on training data but drops to 60% accuracy on unseen test data. Which machine learning problem does this indicate?",
o:["Overfitting","Underfitting","Data Leakage","Vanishing Gradient"],
c:["A"],e:"Overfitting occurs when a model learns training data noise and details too closely, leading to high accuracy on training data but poor generalization on new, unseen test data.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-model-eval.html"},

{d:D,dn:DN,qt:"single",s:"A healthcare provider wants to group unlabelled patient records into distinct clusters based on medical history similarity without pre-defined diagnostic labels. Which machine learning approach should be used?",
o:["Unsupervised Learning (Clustering)","Supervised Learning (Regression)","Reinforcement Learning","Binary Classification"],
c:["A"],e:"Unsupervised learning algorithms (like K-Means clustering) analyze unlabelled datasets to uncover hidden patterns or groupings without human-provided target labels.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html"},

{d:D,dn:DN,qt:"single",s:"An e-commerce platform wants to predict continuous house sale prices based on square footage, location, and bedroom count. Which machine learning task is appropriate for predicting continuous numeric values?",
o:["Regression","Classification","Clustering","Dimensionality Reduction"],
c:["A"],e:"Regression algorithms (like Linear Regression or XGBoost Regressor) predict continuous numerical target outputs (such as prices, temperatures, or counts).",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/algo-linear-direct-wiki.html"},

{d:D,dn:DN,qt:"single",s:"A company wants to build a machine learning model to detect credit card fraud from structured transaction tables. They need a fully managed AWS service to build, train, evaluate, and deploy custom ML models. Which service should they use?",
o:["Amazon SageMaker","Amazon Bedrock","Amazon Comprehend","AWS Glue DataBrew"],
c:["A"],e:"Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, tune, and deploy custom ML models quickly.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html"},

{d:D,dn:DN,qt:"single",s:"Which metric is commonly used to evaluate the performance of a binary classification model when dealing with highly imbalanced datasets (e.g., fraud detection where positive cases are rare)?",
o:["F1 Score / Precision-Recall AUC","Mean Absolute Error (MAE)","R-Squared (R²)","Mean Squared Error (MSE)"],
c:["A"],e:"F1 Score (harmonic mean of Precision and Recall) and Area Under Precision-Recall Curve are far better metrics for imbalanced datasets than simple Accuracy, which can be deceptively high by predicting only the majority class.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-monitor-metric-f1.html"},

{d:D,dn:DN,qt:"multiple",s:"Which TWO activities take place during the Data Preparation phase of the ML lifecycle? (Select TWO.)",
o:["Handling missing values and imputing null fields","Feature scaling and normalizing numerical inputs","Deploying real-time HTTPS inference endpoints","Configuring hyperparameter optimization ranges","Monitoring model drift in production"],
c:["A","B"],e:"Data preparation involves cleaning data (imputing missing values, removing outliers) and feature engineering/scaling (normalization, one-hot encoding) before model training.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/prep.html"},

{d:D,dn:DN,qt:"single",s:"An autonomous driving agent learns optimal steering strategies through trial and error by receiving rewards for staying in lane and penalties for collision. Which ML learning paradigm is this?",
o:["Reinforcement Learning","Supervised Learning","Unsupervised Learning","Semi-supervised Learning"],
c:["A"],e:"Reinforcement Learning (RL) trains an agent to make a sequence of decisions by interacting with an environment to maximize cumulative rewards.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/reinforcement-learning.html"},

{d:D,dn:DN,qt:"single",s:"What is the primary purpose of splitting a dataset into Training, Validation, and Test sets?",
o:["To train the model, tune hyperparameters on validation, and evaluate unbiased generalization performance on test data","To speed up GPU training time","To compress data before uploading to S3","To automatically generate synthetic data samples"],
c:["A"],e:"Splitting data ensures the model learns parameters on Training data, tunes hyperparameters on Validation data, and measures final unbiased performance on unseen Test data.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-model-eval.html"},

{d:D,dn:DN,qt:"single",s:"A machine learning team notices that their image classification model performs poorly because input images have widely different brightness and pixel intensity ranges. Which preprocessing step standardizes feature scales?",
o:["Normalization / Feature Scaling","One-Hot Encoding","Principal Component Analysis (PCA)","Data Imputation"],
c:["A"],e:"Normalization (scaling pixel values to a 0-1 range or z-score standard distribution) ensures numerical features have comparable scales, speeding up gradient descent convergence.",df:"Standard",u:"https://docs.aws.amazon.com/sagemaker/latest/dg/prep-feature-scaling.html"},

{d:D,dn:DN,qt:"single",s:"Which AWS service provides pre-trained computer vision capabilities (such as object detection, face analysis, and text extraction from images) via API without requiring custom model training?",
o:["Amazon Rekognition","Amazon Comprehend","Amazon Polly","Amazon Transcribe"],
c:["A"],e:"Amazon Rekognition makes it easy to add image and video analysis to applications using pre-trained computer vision models via simple API calls.",df:"Standard",u:"https://docs.aws.amazon.com/rekognition/latest/dg/what-is-rekognition.html"},
];
