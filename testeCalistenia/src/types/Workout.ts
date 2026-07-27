import type { Difficulty } from "./Difficult";
import type { WorkoutExercise } from "./WorkoutExercise";

export interface Workout {
    id: string;
    name: string;
    description: string;
    difficulty: Difficulty;
    exercises: WorkoutExercise[];
}