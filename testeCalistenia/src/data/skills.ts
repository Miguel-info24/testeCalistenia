import type { Skill } from "../types/Skill";

export const skills: Skill[] = [
  {
    id: "planche",
    name: "Planche",
    description: "Static pushing skill.",
    level: "Advanced",
    progression: [
      {
        exerciseId: "frog-stand",
        order: 1,
        goal: "Hold for 30 seconds"
      },
      {
        exerciseId: "advanced-frog",
        order: 2,
        goal: "Hold for 20 seconds"
      },
      {
        exerciseId: "tuck-planche",
        order: 3,
        goal: "Hold for 15 seconds"
      },
      {
        exerciseId: "advanced-tuck-planche",
        order: 4,
        goal: "Hold for 10 seconds"
      },
      {
        exerciseId: "straddle-planche",
        order: 5,
        goal: "Hold for 5 seconds"
      },
      {
        exerciseId: "full-planche",
        order: 6,
        goal: "Hold for 3 seconds"
      }
    ]
  },

  {
    id: "handstand",
    name: "Handstand",
    description: "Develop balance and shoulder strength.",
    level: "Intermediate",
    progression: [
      {
        exerciseId: "wall-handstand",
        order: 1,
        goal: "Hold for 60 seconds"
      },
      {
        exerciseId: "wall-handstand-shoulder-taps",
        order: 2,
        goal: "20 taps"
      },
      {
        exerciseId: "chest-to-wall-handstand",
        order: 3,
        goal: "Hold for 45 seconds"
      },
      {
        exerciseId: "freestanding-handstand",
        order: 4,
        goal: "Hold for 10 seconds"
      },
      {
        exerciseId: "handstand-walk",
        order: 5,
        goal: "Walk 5 meters"
      }
    ]
  },

  {
    id: "front-lever",
    name: "Front Lever",
    description: "Static pulling skill.",
    level: "Advanced",
    progression: [
      {
        exerciseId: "tuck-front-lever",
        order: 1,
        goal: "Hold for 20 seconds"
      },
      {
        exerciseId: "advanced-tuck-front-lever",
        order: 2,
        goal: "Hold for 15 seconds"
      },
      {
        exerciseId: "one-leg-front-lever",
        order: 3,
        goal: "Hold for 10 seconds"
      },
      {
        exerciseId: "straddle-front-lever",
        order: 4,
        goal: "Hold for 8 seconds"
      },
      {
        exerciseId: "full-front-lever",
        order: 5,
        goal: "Hold for 5 seconds"
      }
    ]
  },

  {
    id: "back-lever",
    name: "Back Lever",
    description: "Static pulling skill performed behind the body.",
    level: "Advanced",
    progression: [
      {
        exerciseId: "skin-the-cat",
        order: 1,
        goal: "5 reps"
      },
      {
        exerciseId: "tuck-back-lever",
        order: 2,
        goal: "Hold for 15 seconds"
      },
      {
        exerciseId: "advanced-tuck-back-lever",
        order: 3,
        goal: "Hold for 10 seconds"
      },
      {
        exerciseId: "straddle-back-lever",
        order: 4,
        goal: "Hold for 8 seconds"
      },
      {
        exerciseId: "full-back-lever",
        order: 5,
        goal: "Hold for 5 seconds"
      }
    ]
  },

  {
    id: "muscle-up",
    name: "Muscle Up",
    description: "Explosive pulling and pushing movement.",
    level: "Advanced",
    progression: [
      {
        exerciseId: "explosive-pull-up",
        order: 1,
        goal: "5 reps"
      },
      {
        exerciseId: "chest-to-bar-pull-up",
        order: 2,
        goal: "8 reps"
      },
      {
        exerciseId: "band-assisted-muscle-up",
        order: 3,
        goal: "5 reps"
      },
      {
        exerciseId: "jumping-muscle-up",
        order: 4,
        goal: "8 reps"
      },
      {
        exerciseId: "muscle-up",
        order: 5,
        goal: "3 clean reps"
      }
    ]
  },

  {
    id: "l-sit",
    name: "L-Sit",
    description: "Static core and hip flexor skill.",
    level: "Intermediate",
    progression: [
      {
        exerciseId: "tucked-l-sit",
        order: 1,
        goal: "Hold for 20 seconds"
      },
      {
        exerciseId: "one-leg-l-sit",
        order: 2,
        goal: "Hold for 15 seconds"
      },
      {
        exerciseId: "full-l-sit",
        order: 3,
        goal: "Hold for 20 seconds"
      },
      {
        exerciseId: "v-sit",
        order: 4,
        goal: "Hold for 10 seconds"
      }
    ]
  }
];