export interface WorkoutExercise {
    exerciseId: string;
    sets: number;
    reps?: number;
    duration?: number;
    time?: string;
    rest: number;
}