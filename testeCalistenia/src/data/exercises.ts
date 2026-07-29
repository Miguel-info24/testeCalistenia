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
    },
    {
        id: "advanced-frog",
        name: "Advanced Frog",
        description: "Progression after the Frog Stand with greater balance and strength.",
        category: "Skill",
        difficulty: "Intermediate",
        muscles: ["Shoulders", "Core", "Wrists"],
        equipment: ["Floor"],
        image: "/images/advanced-frog.png"
    },
    {
        id: "tuck-planche",
        name: "Tuck Planche",
        description: "First true planche progression.",
        category: "Skill",
        difficulty: "Intermediate",
        muscles: ["Chest", "Shoulders", "Core", "Wrists"],
        equipment: ["Parallettes"],
        image: "/images/tuck-planche.png"
    },
    {
        id: "advanced-tuck-planche",
        name: "Advanced Tuck Planche",
        description: "Advanced tuck position before the straddle planche.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Chest", "Shoulders", "Core", "Wrists"],
        equipment: ["Parallettes"],
        image: "/images/advanced-tuck-planche.png"
    },
    {
        id: "straddle-planche",
        name: "Straddle Planche",
        description: "Planche performed with legs spread.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Chest", "Shoulders", "Core", "Wrists"],
        equipment: ["Parallettes"],
        image: "/images/straddle-planche.png"
    },
    {
        id: "full-planche",
        name: "Full Planche",
        description: "Full planche hold.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Chest", "Shoulders", "Core", "Wrists"],
        equipment: ["Parallettes"],
        image: "/images/full-planche.png"
    },
    {
        id: "wall-handstand",
        name: "Wall Handstand",
        description: "Handstand against a wall.",
        category: "Skill",
        difficulty: "Beginner",
        muscles: ["Shoulders", "Core", "Wrists"],
        equipment: ["Wall"],
        image: "/images/wall-handstand.png"
    },
    {
        id: "wall-handstand-shoulder-taps",
        name: "Wall Handstand Shoulder Taps",
        description: "Shoulder taps while holding a wall handstand.",
        category: "Skill",
        difficulty: "Intermediate",
        muscles: ["Shoulders", "Core", "Wrists"],
        equipment: ["Wall"],
        image: "/images/wall-handstand-shoulder-taps.png"
    },
    {
        id: "chest-to-wall-handstand",
        name: "Chest to Wall Handstand",
        description: "Chest-facing wall handstand for better alignment.",
        category: "Skill",
        difficulty: "Intermediate",
        muscles: ["Shoulders", "Core", "Wrists"],
        equipment: ["Wall"],
        image: "/images/chest-to-wall-handstand.png"
    },
    {
        id: "freestanding-handstand",
        name: "Freestanding Handstand",
        description: "Handstand without wall assistance.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Shoulders", "Core", "Wrists"],
        equipment: ["Floor"],
        image: "/images/freestanding-handstand.png"
    },
    {
        id: "handstand-walk",
        name: "Handstand Walk",
        description: "Walking while balancing in a handstand.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Shoulders", "Core", "Wrists"],
        equipment: ["Floor"],
        image: "/images/handstand-walk.png"
    },
    {
        id: "tuck-front-lever",
        name: "Tuck Front Lever",
        description: "First front lever progression.",
        category: "Skill",
        difficulty: "Intermediate",
        muscles: ["Back", "Core"],
        equipment: ["Bar"],
        image: "/images/tuck-front-lever.png"
    },
    {
        id: "advanced-tuck-front-lever",
        name: "Advanced Tuck Front Lever",
        description: "Advanced tuck front lever progression.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Back", "Core"],
        equipment: ["Bar"],
        image: "/images/advanced-tuck-front-lever.png"
    },
    {
        id: "one-leg-front-lever",
        name: "One Leg Front Lever",
        description: "Front lever progression with one leg extended.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Back", "Core"],
        equipment: ["Bar"],
        image: "/images/one-leg-front-lever.png"
    },
    {
        id: "straddle-front-lever",
        name: "Straddle Front Lever",
        description: "Front lever performed with legs spread.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Back", "Core"],
        equipment: ["Bar"],
        image: "/images/straddle-front-lever.png"
    },
    {
        id: "full-front-lever",
        name: "Full Front Lever",
        description: "Full front lever hold.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Back", "Core"],
        equipment: ["Bar"],
        image: "/images/full-front-lever.png"
    },
    {
        id: "skin-the-cat",
        name: "Skin The Cat",
        description: "Shoulder mobility and back lever preparation exercise.",
        category: "Skill",
        difficulty: "Intermediate",
        muscles: ["Shoulders", "Back", "Core"],
        equipment: ["Rings"],
        image: "/images/skin-the-cat.png"
    },
    {
        id: "tuck-back-lever",
        name: "Tuck Back Lever",
        description: "First back lever progression.",
        category: "Skill",
        difficulty: "Intermediate",
        muscles: ["Back", "Shoulders", "Core"],
        equipment: ["Bar"],
        image: "/images/tuck-back-lever.png"
    },
    {
        id: "advanced-tuck-back-lever",
        name: "Advanced Tuck Back Lever",
        description: "Advanced tuck back lever progression.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Back", "Shoulders", "Core"],
        equipment: ["Bar"],
        image: "/images/advanced-tuck-back-lever.png"
    },
    {
        id: "straddle-back-lever",
        name: "Straddle Back Lever",
        description: "Back lever with legs spread.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Back", "Shoulders", "Core"],
        equipment: ["Bar"],
        image: "/images/straddle-back-lever.png"
    },
    {
        id: "full-back-lever",
        name: "Full Back Lever",
        description: "Full back lever hold.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Back", "Shoulders", "Core"],
        equipment: ["Bar"],
        image: "/images/full-back-lever.png"
    },
    {
        id: "explosive-pull-up",
        name: "Explosive Pull Up",
        description: "High pull-up performed explosively.",
        category: "Pull",
        difficulty: "Advanced",
        muscles: ["Back", "Biceps", "Forearms"],
        equipment: ["Bar"],
        image: "/images/explosive-pull-up.png"
    },
    {
        id: "chest-to-bar-pull-up",
        name: "Chest to Bar Pull Up",
        description: "Pull-up bringing the chest to the bar.",
        category: "Pull",
        difficulty: "Advanced",
        muscles: ["Back", "Biceps"],
        equipment: ["Bar"],
        image: "/images/chest-to-bar-pull-up.png"
    },
    {
        id: "band-assisted-muscle-up",
        name: "Band Assisted Muscle Up",
        description: "Muscle-up performed with a resistance band.",
        category: "Skill",
        difficulty: "Intermediate",
        muscles: ["Back", "Chest", "Shoulders", "Triceps"],
        equipment: ["Resistance Band"],
        image: "/images/band-assisted-muscle-up.png"
    },
    {
        id: "jumping-muscle-up",
        name: "Jumping Muscle Up",
        description: "Beginner muscle-up progression using leg assistance.",
        category: "Skill",
        difficulty: "Beginner",
        muscles: ["Back", "Chest", "Shoulders"],
        equipment: ["Bar"],
        image: "/images/jumping-muscle-up.png"
    },
    {
        id: "muscle-up",
        name: "Muscle Up",
        description: "Complete pull-up to dip transition.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Back", "Chest", "Shoulders", "Biceps", "Triceps"],
        equipment: ["Bar"],
        image: "/images/muscle-up.png"
    },
    {
        id: "tucked-l-sit",
        name: "Tucked L-Sit",
        description: "Beginner progression for the L-Sit.",
        category: "Skill",
        difficulty: "Beginner",
        muscles: ["Core", "Hip Flexors"],
        equipment: ["Parallettes"],
        image: "/images/tucked-l-sit.png"
    },
    {
        id: "one-leg-l-sit",
        name: "One Leg L-Sit",
        description: "Intermediate L-Sit progression.",
        category: "Skill",
        difficulty: "Intermediate",
        muscles: ["Core", "Hip Flexors"],
        equipment: ["Parallettes"],
        image: "/images/one-leg-l-sit.png"
    },
    {
        id: "v-sit",
        name: "V-Sit",
        description: "Advanced progression after the L-Sit.",
        category: "Skill",
        difficulty: "Advanced",
        muscles: ["Core", "Hip Flexors", "Shoulders"],
        equipment: ["Parallettes"],
        image: "/images/v-sit.png"
    }
];