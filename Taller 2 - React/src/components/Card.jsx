import AppButton from "./AppButton"

export default function Card({ icon, title, description, level = 'Intermedio' }){
    return (
        <div className="card-container">
            <h2>{icon}</h2>
            <h4>{title}</h4>
            <p>{description}</p>

            <div className="button-wrapper">
                <AppButton text={level}/>
            </div>
            
        </div>
    )
}