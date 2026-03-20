import { BrowserRouter, Routes, Route } from "react-router"
import Home from "../views/Home"
import AppLayout from "../layout/AppLayout"
import Fallback from "../views/Fallback"
import Courses from "../views/Courses"
import AboutUs from "../views/AboutUs"
import Login from "../views/Login"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<Home />} />
                    <Route path="/cursos" element={<Courses />} />
                    <Route path="/nosotros"element={<AboutUs/>} />
                    <Route path="/login"element={<Login/>} />
                    <Route path="*" element={<Fallback />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

/*
    localhost:3000/   
*/ 