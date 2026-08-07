import { useState } from "react";
import { exercises } from "../data/exercises";
import ExerciseCard from "../components/ExerciseCard/ExerciseCard";
import SearchBar from "../components/SearchBar/SearchBar";
import ExerciseRow from "../components/ExerciseRow/ExerciseRow";

export default function Exercises() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const pushExercises = exercises.filter((exercise) => exercise.category === "Push");
    const pullExercises = exercises.filter((exercise) => exercise.category === "Pull");
    const legsExercises = exercises.filter((exercise) => exercise.category === "Legs");
    const coreExercises = exercises.filter((exercise) => exercise.category === "Core");
    const skillExercises = exercises.filter((exercise) => exercise.category === "Skill");

    const filteredExercises = exercises.filter((exercise) => {
        const searchText = search.toLowerCase();

        return (
            exercise.name.toLowerCase().includes(searchText) ||
            exercise.category.toLowerCase().includes(searchText) ||
            exercise.difficulty.toLowerCase().includes(searchText) ||
            exercise.muscles.some((muscle) =>
                muscle.toLowerCase().includes(searchText)
            )
        );
    });
    return (
        <main className="min-h-screen bg-gray-100">
            <div className="mx-auto max-w-7xl p-8 bg-white shadow-md rounded-lgj">
                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search exercises..."
                />

                <div className="mt-8 space-y-10">

                    <ExerciseRow
                        title="Push"
                        exercises={pushExercises}
                    />

                    <ExerciseRow
                        title="Pull"
                        exercises={pullExercises}
                    />

                    <ExerciseRow
                        title="Legs"
                        exercises={legsExercises}
                    />

                    <ExerciseRow
                        title="Core"
                        exercises={coreExercises}
                    />

                    <ExerciseRow
                        title="Skill"
                        exercises={skillExercises}
                    />

                </div>
            </div>
        </main >
    );
}