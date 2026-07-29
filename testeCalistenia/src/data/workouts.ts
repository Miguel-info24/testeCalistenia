import type { Workout } from "../types/Workout";

export const workouts: Workout[] = [
  {
    id: "beginner-full-body",
    name: "Beginner Full Body",
    description: "A complete beginner workout.",
    difficulty: "Beginner",
    exercises: [
      {
        exerciseId: "push-up",
        sets: 3,
        reps: 10,
        time: "2-0-1",
        rest: 60
      },
      {
        exerciseId: "australian-pull-up",
        sets: 3,
        reps: 8,
        time: "2-1-1",
        rest: 60
      },
      {
        exerciseId: "squat",
        sets: 3,
        reps: 15,
        time: "3-0-1",
        rest: 60
      },
      {
        exerciseId: "plank",
        sets: 3,
        duration: 30,
        time: "Static",
        rest: 45
      }
    ]
  },

  {
    id: "push-strength",
    name: "Push Strength",
    description: "Develop pushing strength.",
    difficulty: "Intermediate",
    exercises: [
      {
        exerciseId: "push-up",
        sets: 4,
        reps: 15,
        time: "3-1-1",
        rest: 90
      },
      {
        exerciseId: "dip",
        sets: 4,
        reps: 8,
        time: "3-1-1",
        rest: 90
      },
      {
        exerciseId: "pike-push-up",
        sets: 3,
        reps: 10,
        time: "3-1-1",
        rest: 90
      },
      {
        exerciseId: "planche-lean",
        sets: 3,
        duration: 20,
        time: "Static",
        rest: 60
      }
    ]
  },

  {
    id: "pull-strength",
    name: "Pull Strength",
    description: "Build pulling strength.",
    difficulty: "Intermediate",
    exercises: [
      {
        exerciseId: "pull-up",
        sets: 4,
        reps: 6,
        time: "2-1-X",
        rest: 120
      },
      {
        exerciseId: "chin-up",
        sets: 3,
        reps: 8,
        time: "2-1-1",
        rest: 90
      },
      {
        exerciseId: "australian-pull-up",
        sets: 3,
        reps: 12,
        time: "2-1-1",
        rest: 60
      },
      {
        exerciseId: "hanging-leg-raise",
        sets: 3,
        reps: 10,
        time: "2-0-2",
        rest: 60
      }
    ]
  },

  {
    id: "core-foundation",
    name: "Core Foundation",
    description: "Strengthen your core.",
    difficulty: "Beginner",
    exercises: [
      {
        exerciseId: "plank",
        sets: 3,
        duration: 45,
        time: "Static",
        rest: 45
      },
      {
        exerciseId: "hollow-body-hold",
        sets: 3,
        duration: 30,
        time: "Static",
        rest: 45
      },
      {
        exerciseId: "sit-up",
        sets: 3,
        reps: 20,
        time: "2-0-2",
        rest: 45
      },
      {
        exerciseId: "hanging-leg-raise",
        sets: 3,
        reps: 10,
        time: "2-0-2",
        rest: 60
      }
    ]
  },

  {
    id: "planche-beginner",
    name: "Planche Beginner",
    description: "Start your planche journey.",
    difficulty: "Beginner",
    exercises: [
      {
        exerciseId: "frog-stand",
        sets: 4,
        duration: 20,
        time: "Static",
        rest: 60
      },
      {
        exerciseId: "planche-lean",
        sets: 4,
        duration: 15,
        time: "Static",
        rest: 60
      },
      {
        exerciseId: "pike-push-up",
        sets: 3,
        reps: 10,
        time: "3-1-1",
        rest: 90
      }
    ]
  },

  {
    id: "front-lever-beginner",
    name: "Front Lever Beginner",
    description: "Learn the front lever step by step.",
    difficulty: "Intermediate",
    exercises: [
      {
        exerciseId: "pull-up",
        sets: 4,
        reps: 6,
        time: "2-1-X",
        rest: 120
      },
      {
        exerciseId: "tuck-front-lever",
        sets: 4,
        duration: 10,
        time: "Static",
        rest: 90
      },
      {
        exerciseId: "hollow-body-hold",
        sets: 3,
        duration: 30,
        time: "Static",
        rest: 60
      }
    ]
  },

  {
    id: "handstand-beginner",
    name: "Handstand Beginner",
    description: "Develop balance and shoulder control.",
    difficulty: "Beginner",
    exercises: [
      {
        exerciseId: "wall-handstand",
        sets: 5,
        duration: 30,
        time: "Static",
        rest: 60
      },
      {
        exerciseId: "wall-handstand-shoulder-taps",
        sets: 3,
        reps: 10,
        time: "2-0-2",
        rest: 60
      },
      {
        exerciseId: "pike-push-up",
        sets: 3,
        reps: 10,
        time: "3-1-1",
        rest: 90
      }
    ]
  },

  {
    id: "muscle-up-preparation",
    name: "Muscle-Up Preparation",
    description: "Build strength for your first muscle-up.",
    difficulty: "Advanced",
    exercises: [
      {
        exerciseId: "explosive-pull-up",
        sets: 5,
        reps: 5,
        time: "X-0-X",
        rest: 120
      },
      {
        exerciseId: "chest-to-bar-pull-up",
        sets: 4,
        reps: 6,
        time: "X-0-X",
        rest: 120
      },
      {
        exerciseId: "dip",
        sets: 4,
        reps: 10,
        time: "3-1-1",
        rest: 90
      }
    ]
  },

  {
    id: "leg-day",
    name: "Leg Day",
    description: "Lower body strength workout.",
    difficulty: "Beginner",
    exercises: [
      {
        exerciseId: "squat",
        sets: 4,
        reps: 20,
        time: "3-0-1",
        rest: 60
      }
    ]
  }
];