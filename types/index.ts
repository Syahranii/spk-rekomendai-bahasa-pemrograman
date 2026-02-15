export interface Question {
  id: number;
  text: string;
  type: 'single' | 'multiple' | 'range';
  options?: string[];
  min?: number;
  max?: number;
}

export interface Language {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  useCases: string[];
  learningTime: string;
  resources: string[];
  score: number;
}

export interface AssessmentResult {
  language: Language;
  score: number;
  explanation: string;
  roadmap: string[];
}

export interface TeamMember {
  foto: string;
  nama: string;
  nim: string;
  kelas: string;
  gmail: string;
}

export interface RuleData {
  criteria: {
    goal: string;
    experience: string;
    time: number;
    mathInterest: string;
    platform: string;
  };
  language: string;
  score: number;
}

// Tambahkan ini di akhir file types/index.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string;
  }
}
