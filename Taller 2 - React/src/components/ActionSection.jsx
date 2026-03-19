import Counter from "./Counter"

export default function ActionSection(){
    return (
        <div className="action-section-container">
            <h3>Cuántos estudiantes van a inscribirse?</h3>
            <p>Usa los botones para ajustar el número</p>
            <Counter></Counter>
            <p>estudiantes inscritos</p>
        </div>
    )
}