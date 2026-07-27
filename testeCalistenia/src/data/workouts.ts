import type { Workout } from "../types/workout";
export const workouts: Workout[] = [
    {
        id: "beginner-push",
        name: "Push Beginner",
        description: "Basic push workout.",
        difficulty: "Beginner",
        exercises: [
            {
                exerciseId: "push-up",
                sets: 3,
                reps: 12,
                rest: 60
            }
        ]
    }
];