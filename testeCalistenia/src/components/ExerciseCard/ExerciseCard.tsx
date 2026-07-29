import type { Exercise } from "../../types/Exercise";

interface ExerciseCardProps {
    exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
    const icons = {
        Push: "💪",
        Pull: "🏋️",
        Legs: "🦵",
        Core: "🔥",
        Skill: "🤸",
    };
    return (<>
        <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {/* <img
                src={exercise.image}
                alt={exercise.name}
                className="h-52 w-full object-cover"
            /> */}
            <span className="text-7xl">
                {icons[exercise.category]}
            </span>

            <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">
                        {exercise.name}
                    </h2>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                        {exercise.category}
                    </span>
                </div>

                <p className="mb-4 text-sm text-gray-600">
                    {exercise.description}
                </p>

                <div className="mb-4 flex items-center gap-2">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {exercise.difficulty}
                    </span>
                </div>

                <div className="mb-3">
                    <h3 className="mb-1 text-sm font-semibold text-gray-800">
                        Muscles
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {exercise.muscles.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-1 text-sm font-semibold text-gray-800">
                        Equipment
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {exercise.equipment.map((item) => (
                            <span
                                key={item}
                                className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article></>
    );
}