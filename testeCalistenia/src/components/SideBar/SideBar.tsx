import { Link } from "react-router-dom";
import { House,
    Dumbbell,
    Trophy,
    NotebookPen,
    ChartColumn,
    User } from "lucide-react";

export default function SideBar() {
    return (
        <aside className="sticky top-0 h-screen w-64 bg-zinc-900 text-white p-6">
            <h1 className="mb-8 text-3xl font-bold">
                Calisthenics
            </h1>

            <nav className="flex flex-col">

                <Link to="/" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">
                    <House className="inline mr-2" size={20} />
                    Home
                </Link>

                <Link to="/exercises" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">
                    <Dumbbell className="inline mr-2" size={20} />
                    Exercises
                </Link>

                <Link to="/skills" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">
                    <Trophy className="inline mr-2" size={20} />
                    Skills
                </Link>

                <Link to="/workouts" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">
                    <ChartColumn className="inline mr-2" size={20} />
                    Workouts
                </Link>

                <Link to="/create" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">
                    <NotebookPen className="inline mr-2" size={20} />
                    Create
                </Link>

                <Link to="/progress" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">
                    <ChartColumn className="inline mr-2" size={20} />
                    Progress
                </Link>

                <Link to="/profile" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">
                    <User className="inline mr-2" size={20} />
                    Profile
                </Link>

            </nav>
        </aside>
    );
}