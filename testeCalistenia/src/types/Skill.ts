import type { Difficulty } from "./Difficult";
import type { Progression } from "./Progression";
export interface Skill {
    id: string;
    name: string;
    description: string;
    level: Difficulty;
    progression: Progression[];
}