import type { Exercise } from "../types/Exercise";

export const exercises: Exercise[] = [
    {
        id: "push-up",
        name: "Push Up",
        description: "Classic push-up.",
        category: "Push",
        difficulty: "Beginner",
        muscles: ["Chest", "Triceps", "Shoulders"],
        equipment: ["Floor"],
        image: "/images/push-up.png"
    },
    {
        id: "squat",
        name: "Squat",
        description: "Basic squat exercise.",
        category: "Legs",
        difficulty: "Beginner",
        muscles: ["Quads", "Hamstrings", "Glutes"],
        equipment: ["Floor"],
        image: "/images/squat.png"
    },
    {
        id: "sit-up",
        name: "Sit Up",
        description: "Classic sit-up exercise.",
        category: "Core",
        difficulty: "Beginner",
        muscles: ["Abs"],
        equipment: ["Floor"],
        image: "/images/sit-up.png"
    },
    {
    id: "pull-up",
    name: "Pull Up",
    description: "Classic pull-up using an overhand grip.",
    category: "Pull",
    difficulty: "Intermediate",
    muscles: ["Back", "Biceps", "Forearms"],
    equipment: ["Bar"],
    image: "/images/pull-up.png"
},
{
    id: "chin-up",
    name: "Chin Up",
    description: "Pull-up using an underhand grip.",
    category: "Pull",
    difficulty: "Intermediate",
    muscles: ["Back", "Biceps"],
    equipment: ["Bar"],
    image: "/images/chin-up.png"
},
{
    id: "dip",
    name: "Dip",
    description: "Bodyweight dip for chest and triceps.",
    category: "Push",
    difficulty: "Intermediate",
    muscles: ["Chest", "Triceps", "Shoulders"],
    equipment: ["Dip Bar"],
    image: "/images/dip.png"
},
{
    id: "pike-push-up",
    name: "Pike Push Up",
    description: "Push-up variation focused on shoulder strength.",
    category: "Push",
    difficulty: "Intermediate",
    muscles: ["Shoulders", "Triceps"],
    equipment: ["Floor"],
    image: "/images/pike-push-up.png"
},
{
    id: "australian-pull-up",
    name: "Australian Pull Up",
    description: "Horizontal pulling exercise for beginners.",
    category: "Pull",
    difficulty: "Beginner",
    muscles: ["Back", "Biceps"],
    equipment: ["Bar"],
    image: "/images/australian-pull-up.png"
},
{
    id: "hollow-body-hold",
    name: "Hollow Body Hold",
    description: "Static core exercise for body control.",
    category: "Core",
    difficulty: "Beginner",
    muscles: ["Core"],
    equipment: ["Floor"],
    image: "/images/hollow-body-hold.png"
},
{
    id: "plank",
    name: "Plank",
    description: "Isometric exercise to strengthen the core.",
    category: "Core",
    difficulty: "Beginner",
    muscles: ["Core"],
    equipment: ["Floor"],
    image: "/images/plank.png"
},
{
    id: "hanging-leg-raise",
    name: "Hanging Leg Raise",
    description: "Advanced abdominal exercise performed on a bar.",
    category: "Core",
    difficulty: "Advanced",
    muscles: ["Core", "Hip Flexors"],
    equipment: ["Bar"],
    image: "/images/hanging-leg-raise.png"
},
{
    id: "frog-stand",
    name: "Frog Stand",
    description: "Beginner balance exercise for planche progression.",
    category: "Skill",
    difficulty: "Beginner",
    muscles: ["Shoulders", "Core", "Wrists"],
    equipment: ["Floor"],
    image: "/images/frog-stand.png"
},
{
    id: "l-sit",
    name: "L-Sit",
    description: "Static hold requiring core and hip flexor strength.",
    category: "Skill",
    difficulty: "Intermediate",
    muscles: ["Core", "Shoulders", "Hip Flexors"],
    equipment: ["Parallettes"],
    image: "/images/l-sit.png"
},
{
    id: "handstand",
    name: "Handstand",
    description: "Freestanding inverted balance exercise.",
    category: "Skill",
    difficulty: "Advanced",
    muscles: ["Shoulders", "Core", "Wrists"],
    equipment: ["Floor"],
    image: "/images/handstand.png"
},
{
    id: "planche-lean",
    name: "Planche Lean",
    description: "Planche progression focusing on shoulder strength.",
    category: "Skill",
    difficulty: "Intermediate",
    muscles: ["Chest", "Shoulders", "Core", "Wrists"],
    equipment: ["Floor"],
    image: "/images/planche-lean.png"
}
];