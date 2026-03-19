import AppButton from "./AppButton"
import "./components.css"

export default function Hero(){
    return (
        <div className="hero-container">
            <h1>Aprende <span>React</span> desde cero</h1>

            <p>Domina la libreria más popular del frontend con proyectos prácticos y reales.</p>

            <AppButton text={"Ver Cursos"}/>
        </div>
    )
}