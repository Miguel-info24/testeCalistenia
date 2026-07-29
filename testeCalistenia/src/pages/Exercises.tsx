import { useState } from "react";
import { exercises } from "../data/exercises";
import ExerciseCard from "../components/ExerciseCard/ExerciseCard";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Exercises() {
    const [search, setSearch] = useState("");
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
            <div className="mx-auto max-w-7xl p-8 bg-white shadow-md rounded-lg">
                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder="Search exercises..."
                />

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredExercises.map((exercise) => (
                        <ExerciseCard
                            key={exercise.id}
                            exercise={exercise}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}