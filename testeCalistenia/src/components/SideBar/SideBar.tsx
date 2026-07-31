import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <aside className="sticky top-0 h-screen w-64 bg-zinc-900 text-white p-6">
            <h1 className="mb-8 text-3xl font-bold">
                Calisthenics
            </h1>

            <nav className="flex flex-col gap-3">

                <Link to="/">Home</Link>

                <Link to="/exercises">Exercises</Link>

                <Link to="/skills">Skills</Link>

                <Link to="/workouts">Workouts</Link>

                <Link to="/create">Create</Link>

                <Link to="/progress">Progress</Link>

                <Link to="/profile">Profile</Link>

            </nav>
        </aside>
    );
}