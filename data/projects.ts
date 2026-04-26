import {
  HiOutlineSparkles,
  HiOutlineCircleStack,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

export type Category =
  | "All"
  | "AI/ML"
  | "Data Engineering"
  | "Analytics"
  | "NLP";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Category;
  technologies: string[];
  metrics: string;
  demoUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Resume Screening System",
    description:
      "NLP-based system that automatically screens resumes and ranks candidates using semantic similarity and transformer embeddings.",
    image: "/projects/project1.webp",
    category: "NLP",
    technologies: ["Python", "Scikit-learn", "NLTK", "FastAPI"],
    metrics: "Reduced manual screening time by 70%",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Real-Time Fraud Detection Pipeline",
    description:
      "Streaming data pipeline with ensemble ML models to detect fraudulent transactions in real time with sub-second latency.",
    image: "/projects/project2.webp",
    category: "Data Engineering",
    technologies: ["Kafka", "Spark", "Python", "AWS"],
    metrics: "Detected 95% of fraud in real-time",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    description:
      "Predictive ML model to identify customers at risk of churning using gradient boosting and SHAP explainability.",
    image: "/projects/project3.webp",
    category: "Analytics",
    technologies: ["Python", "XGBoost", "SHAP", "Pandas"],
    metrics: "Improved retention by 30%",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Context-Aware AI Chatbot",
    description:
      "RAG-based chatbot using LLMs, vector embeddings, and LangChain for accurate, context-aware multi-turn conversations.",
    image: "/projects/project4.webp",
    category: "AI/ML",
    technologies: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
    metrics: "Handled 10k+ user queries",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Scalable ETL Data Warehouse",
    description:
      "Automated ETL system for ingesting, transforming, and loading large-scale data into a cloud analytics warehouse.",
    image: "/projects/project5.webp",
    category: "Data Engineering",
    technologies: ["Airflow", "PostgreSQL", "dbt", "AWS Redshift"],
    metrics: "Processed 1M+ records daily",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Medical Image Classification",
    description:
      "CNN-based deep learning model using transfer learning (EfficientNet) to classify medical images with high precision.",
    image: "/projects/project6.webp",
    category: "AI/ML",
    technologies: ["TensorFlow", "Keras", "OpenCV", "EfficientNet"],
    metrics: "Achieved 92% diagnostic accuracy",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
];

export const categories: Category[] = [
  "All",
  "AI/ML",
  "Data Engineering",
  "Analytics",
  "NLP",
];

export const categoryIcons: Record<Category, React.ElementType> = {
  All: HiOutlineSquares2X2,
  "AI/ML": HiOutlineSparkles,
  "Data Engineering": HiOutlineCircleStack,
  Analytics: HiOutlineChartBar,
  NLP: HiOutlineDocumentText,
};
