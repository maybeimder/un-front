import Card from "../components/Card";
import AppButton from "../components/AppButton";
import  {cards}  from "../data/cards";
import "../styles/Courses.css"

export default function Courses () {
    return (
        <div className="courses-wrapper">
            <h1>Nuestros cursos</h1>
            <p>Conoce los cursos que ponemos a tu disposición.</p>
            <div className="courses-grid-wrapper">
                {cards.map ((card) => (
                    <Card 
                        id ={card.id}
                        icon = {card.icon}
                        title = {card.title}
                        description = {card.description}
                        level = {card.level}
                     />  
                ))}
            </div>
            <AppButton text = "Cargar más.." style = {{width: '100%', textAling:'center'}} />
        </div>
    )
}