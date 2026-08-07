import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <aside className="sticky top-0 h-screen w-64 bg-zinc-900 text-white p-6">
            <h1 className="mb-8 text-3xl font-bold">
                Calisthenics
            </h1>

            <nav className="flex flex-col">

                <Link to="/" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">Home</Link>

                <Link to="/exercises" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">Exercises</Link>

                <Link to="/skills" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">Skills</Link>

                <Link to="/workouts" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">Workouts</Link>

                <Link to="/create" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">Create</Link>

                <Link to="/progress" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">Progress</Link>

                <Link to="/profile" className="transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800 px-4 py-2">Profile</Link>

            </nav>
        </aside>
    );
}