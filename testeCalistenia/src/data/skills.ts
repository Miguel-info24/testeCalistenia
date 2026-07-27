import type { Skill } from "../types/skill";
export const skills: Skill[] = [
  {
    id: "planche",
    name: "Planche",
    description: "Static pushing skill.",
    level: "Advanced",
    progressions: [
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

      }
{
        exerciseId: "straddle-planche",
        order: 5,
        goal: "Hold for 5 seconds"
      }
    ]
  }
]; 