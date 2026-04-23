// data.ts
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import {
  HiCode,
  HiChip,
  HiDatabase,
  HiChartBar,
  HiCube,
  HiFire,
  HiGlobe,
  HiServer,
} from "react-icons/hi";

export type SkillLevel = "Expert" | "Advanced" | "Intermediate";

export type Skill = {
  id: number;
  name: string;
  icon: React.ElementType;
  level: SkillLevel;
  experience: string;
};

export const techStack = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
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
    icon: HiChip,
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
    icon: HiCode,
    level: "Advanced",
    experience: "2+ years",
  },
  {
    id: 5,
    name: "SQL",
    icon: HiDatabase,
    level: "Expert",
    experience: "3+ years",
  },
  {
    id: 6,
    name: "Pandas & NumPy",
    icon: HiChartBar,
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
    name: "APIs & FastAPI",
    icon: HiGlobe,
    level: "Advanced",
    experience: "2+ years",
  },
  {
    id: 10,
    name: "Big Data (Spark)",
    icon: HiServer,
    level: "Intermediate",
    experience: "1+ year",
  },
  {
    id: 11,
    name: "MLOps",
    icon: HiFire,
    level: "Intermediate",
    experience: "1+ year",
  },
];
