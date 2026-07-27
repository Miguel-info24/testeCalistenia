import type { Muscle } from "./Muscle";
export interface Exercise {
    id: string;
    name: string;
    description: string;
    category: string;
    difficulty: string;
    muscles: Muscle[];
    equipment: string[];
    image: string;
    video?: string;
    skill?: string;
}