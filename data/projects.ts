import {
  HiOutlineSparkles,
  HiOutlineDatabase,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineViewGrid,
} from "react-icons/hi";

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
      "Built an NLP-based system to automatically screen resumes and rank candidates using semantic similarity.",
    image: "/projects/project1.webp",
    category: "NLP",
    technologies: ["Python", "Scikit-learn", "NLTK", "FastAPI"],
    metrics: "Reduced manual screening time by 70%",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Real-Time Fraud Detection Pipeline",
    description:
      "Streaming pipeline with ML models to detect fraudulent transactions in real time.",
    image: "/projects/project2.webp",
    category: "Data Engineering",
    technologies: ["Kafka", "Spark", "Python", "AWS"],
    metrics: "Detected 95% fraud in real-time",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    description:
      "Predictive ML model to identify customers likely to churn using classification algorithms.",
    image: "/projects/project3.webp",
    category: "Analytics",
    technologies: ["Python", "XGBoost", "Pandas"],
    metrics: "Improved retention by 30%",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "AI Chatbot with Context",
    description:
      "Context-aware chatbot using embeddings and transformer models.",
    image: "/projects/project4.webp",
    category: "AI/ML",
    technologies: ["LangChain", "OpenAI", "Vector DB"],
    metrics: "Handled 10k+ queries",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Data Warehouse ETL Pipeline",
    description: "Scalable ETL system for large-scale analytics and reporting.",
    image: "/projects/project5.webp",
    category: "Data Engineering",
    technologies: ["Airflow", "PostgreSQL", "AWS"],
    metrics: "Processed 1M+ records daily",
    demoUrl: "https://timetoprogram.com/projects",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Image Classification Model",
    description: "CNN-based deep learning model using transfer learning.",
    image: "/projects/project6.webp",
    category: "AI/ML",
    technologies: ["TensorFlow", "Keras", "OpenCV"],
    metrics: "Achieved 92% accuracy",
    demoUrl: "https://timetoprogram.com/projects",
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
  All: HiOutlineViewGrid,
  "AI/ML": HiOutlineSparkles,
  "Data Engineering": HiOutlineDatabase,
  Analytics: HiOutlineChartBar,
  NLP: HiOutlineDocumentText,
};
