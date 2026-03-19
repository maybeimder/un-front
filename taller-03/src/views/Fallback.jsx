import { Link } from "react-router"
import "../styles/Fallback.css"

export default function Fallback() {
    return (
        <div className="fallback-wrapper">
            <h1>404</h1>
            <p>La pagina no existe.</p>
            <Link to="/"> 🖐️ Volver </Link>
        </div>
    )
}