import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/layout";

// import Home from "../pages/Home";

import Exercises from "../pages/Exercises";
// import ExerciseDetails from "../pages/ExerciseDetails";
// import CreateExercise from "../pages/CreateExercise";

// import Skills from "../pages/Skills";
// import SkillDetails from "../pages/SkillDetail";

// import Workouts from "../pages/Workouts";
// import WorkoutDetails from "../pages/WorkoutDetails";
// import CreateWorkout from "../pages/CreateWorkout";

// import Progress from "../pages/Progress";
// import Profile from "../pages/Profile";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>

                    <Route path="/" element={<Exercises />} />

                    {/* <Route path="/exercises" element={<Exercises />} /> */}
                    {/* <Route path="/exercises/create" element={<CreateExercise />} /> */}
                    {/* <Route path="/exercises/:id" element={<ExerciseDetails />} /> */}

                    {/* <Route path="/skills" element={<Skills />} /> */}
                    {/* <Route path="/skills/:id" element={<SkillDetails />} /> */}

                    {/* <Route path="/workouts" element={<Workouts />} /> */}
                    {/* <Route path="/workouts/create" element={<CreateWorkout />} /> */}
                    {/* <Route path="/workouts/:id" element={<WorkoutDetails />} /> */}

                    {/* <Route path="/progress" element={<Progress />} /> */}

                    {/* <Route path="/profile" element={<Profile />} /> */}

                </Route>
            </Routes>
        </BrowserRouter>
    );
}