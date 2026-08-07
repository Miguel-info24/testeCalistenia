import ExerciseCard from "../ExerciseCard/ExerciseCard";
import type { Exercise } from "../../types/Exercise";

interface props {
    title: string;
    exercises: Exercise[];
}

export default function ExerciseRow({ title, exercises }: props) {
    return (
        <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">{title}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {exercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
        </section>
    )
}