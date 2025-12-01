import { JSX } from "react";

export interface WorkImage {
  id: string;
  src: string;
  categories: string[];
  title: string;
  client: string;
  year: string;
}

export interface Tab {
  id: string;
  label: string;
}

export interface TechStackItem {
  title: string;
  content: string;
}

export interface Course {
  title: string;
  instructor: string;
  description?: string;
}

export interface Social {
  icon: JSX.Element;
  title: string;
  handle: string;
  link: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  title: string;
  client: string;
  year: string;
  categories: string[];
  hero: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  images: string[];
  process: ProcessStep[];
  link?: string;
}

export interface ProjectData {
  [key: string]: Project;
}

export interface AnimatedTextProps {
  text: string;
  delay?: number;
  shouldAnimate?: boolean;
}
