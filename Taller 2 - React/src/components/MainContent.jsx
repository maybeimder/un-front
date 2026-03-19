import "./components.css"
import Card from "./Card"

export default function MainContent(){
    return (
        <main>
            <h3>Nuestros Cursos</h3>
            <p>Elige el camino que mejor se adapte a ti</p>

            <div className="cards-container">
                <Card 
                    icon="⚛️" 
                    title="React Básico" 
                    description="Componentes, props, estado y eventos. Todo lo que necesitas para empezar."
                    level="Principiante"
                />
                <Card 
                    icon="🔁" 
                    title="React Hooks" 
                    description="Profundiza en useState, useEffect y crea tus propios custom hooks."
                />
                <Card 
                    icon="🗂️" 
                    title="Estado Global" 
                    description="Gestiona el estado con ContextAPI y aprende cuándo usarlo."
                />
                <Card 
                    icon="🚀" 
                    title="React Avanzado" 
                    description="Rendimiento, patrones avanzados y arquitectura para proyectos grandes."
                    level="Avanzado"
                />
            </div>
        </main>
    )
}