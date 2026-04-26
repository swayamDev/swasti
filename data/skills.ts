import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiApachespark,
  SiPostgresql,
  SiFastapi,
  SiDocker,
  SiGooglecloud,
} from "react-icons/si";
import { HiCpuChip, HiCube, HiCodeBracket } from "react-icons/hi2";

export type SkillLevel = "Expert" | "Advanced" | "Intermediate";

export type Skill = {
  id: number;
  name: string;
  icon: React.ElementType;
  level: SkillLevel;
  experience: string;
};

export const techStack = [
  { name: "Python", icon: SiPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Pandas", icon: SiPandas },
  { name: "Apache Spark", icon: SiApachespark },
];

export const skills: Skill[] = [
  {
    id: 1,
    name: "Python",
    icon: SiPython,
    level: "Expert",
    experience: "3+ years",
  },
  {
    id: 2,
    name: "Machine Learning",
    icon: HiCpuChip,
    level: "Expert",
    experience: "3+ years",
  },
  {
    id: 3,
    name: "Deep Learning",
    icon: HiCube,
    level: "Advanced",
    experience: "2+ years",
  },
  {
    id: 4,
    name: "Data Structures & Algo",
    icon: HiCodeBracket,
    level: "Advanced",
    experience: "2+ years",
  },
  {
    id: 5,
    name: "SQL & PostgreSQL",
    icon: SiPostgresql,
    level: "Expert",
    experience: "3+ years",
  },
  {
    id: 6,
    name: "Pandas & NumPy",
    icon: SiPandas,
    level: "Expert",
    experience: "3+ years",
  },
  {
    id: 7,
    name: "TensorFlow / Keras",
    icon: SiTensorflow,
    level: "Advanced",
    experience: "2+ years",
  },
  {
    id: 8,
    name: "PyTorch",
    icon: SiPytorch,
    level: "Intermediate",
    experience: "1+ year",
  },
  {
    id: 9,
    name: "FastAPI",
    icon: SiFastapi,
    level: "Advanced",
    experience: "2+ years",
  },
  {
    id: 10,
    name: "Apache Spark",
    icon: SiApachespark,
    level: "Intermediate",
    experience: "1+ year",
  },
  {
    id: 11,
    name: "MLOps & Docker",
    icon: SiDocker,
    level: "Intermediate",
    experience: "1+ year",
  },
  {
    id: 12,
    name: "Cloud Platforms",
    icon: SiGooglecloud,
    level: "Intermediate",
    experience: "1+ year",
  },
];

export const skillsForChart = [
  { name: "Data Analysis", value: 92 },
  { name: "Machine Learning", value: 88 },
  { name: "Deep Learning", value: 80 },
  { name: "NLP", value: 82 },
  { name: "Data Engineering", value: 76 },
  { name: "MLOps", value: 68 },
];
