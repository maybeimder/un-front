import "./components.css"
import { NavLink } from "react-router"

export default function Header() {
    return (
        <header>
            <h2>ReactAcademy</h2>

            <nav>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/cursos">Cursos</NavLink>
                <NavLink to="/nosotros">Nosotros</NavLink>
            </nav>
        </header>
    )
}