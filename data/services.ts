import { IconType } from "react-icons";
import {
  HiOutlineCpuChip,
  HiOutlineChatBubbleLeftRight,
  HiOutlineChartBar,
  HiOutlineCloud,
  HiOutlineSparkles,
  HiOutlineCircleStack,
} from "react-icons/hi2";

export type Service = {
  id: number;
  icon: IconType;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 1,
    icon: HiOutlineCpuChip,
    title: "Machine Learning Models",
    description:
      "Building and deploying scalable machine learning models for prediction, classification, and data-driven decision making.",
  },
  {
    id: 2,
    icon: HiOutlineCircleStack,
    title: "Data Engineering",
    description:
      "Designing robust ETL pipelines, data warehouses, and real-time data processing systems for large-scale applications.",
  },
  {
    id: 3,
    icon: HiOutlineChatBubbleLeftRight,
    title: "NLP Solutions",
    description:
      "Developing natural language processing systems including chatbots, sentiment analysis, and text classification.",
  },
  {
    id: 4,
    icon: HiOutlineChartBar,
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable insights using visualization, dashboards, and statistical analysis.",
  },
  {
    id: 5,
    icon: HiOutlineSparkles,
    title: "Deep Learning",
    description:
      "Creating neural network models for image recognition, speech processing, and advanced AI applications.",
  },
  {
    id: 6,
    icon: HiOutlineCloud,
    title: "AI Deployment & MLOps",
    description:
      "Deploying AI models using cloud platforms with CI/CD pipelines, monitoring, and scalable infrastructure.",
  },
];
