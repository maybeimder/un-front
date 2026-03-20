import Hero from "../modules/Home/Hero"
import AppButton from "../components/AppButton"
import "../styles/AboutUs.css"
import { AboutUscards, values } from "../data/cards"

export default function AboutUs() {
  return (
    <div className="aboutus-wrapper">

      <Hero />

      <section className="aboutus-mission">
        <div className="mission-block">
          <h3>Misión</h3>
          <p>Democratizar el acceso a una formación frontend de élite. La brecha entre un tutorial y una empresa tecnológica se cierra con práctica deliberada, código limpio y una comunidad que no te deja solo cuando el debugger no responde.</p>
        </div>
        <div className="mission-block">
          <h3>Visión</h3>
          <p>Ser el ecosistema de aprendizaje de referencia en habla hispana, donde cada desarrollador encuentre el camino más corto y sólido para dominar React, desde los fundamentos hasta las arquitecturas más complejas.</p>
        </div>
      </section>

      <section className="aboutus-story">
        <h2>De desarrolladores para desarrolladores.</h2>
        <p>ReactAcademy nació después de ver a cientos de aspirantes frustrados por cursos que solo rascaban la superficie. El mundo no necesitaba más videos teóricos, sino un puente real hacia la industria.</p>
        <p>Empezamos como un pequeño grupo de mentores ayudando a colegas con Hooks y gestión de estado. Hoy somos una academia donde la excelencia técnica y la pedagogía se encuentran. No somos una plataforma de videos; somos el lugar donde el código cobra sentido.</p>
      </section>

      <section className="aboutus-cards">
        <h2>El Diferencial</h2>
        <div className="cards-container">
          {AboutUscards.map((card) => (
            <div key={card.title} className="card-container">
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="aboutus-values">
        <h2>Valores</h2>
        {values.map((value) => (
          <div key={value.title} className="value-item">
            <h4>{value.title}</h4>
            <p>{value.body}</p>
          </div>
        ))}
      </section>

      <section className="action-section-container">
        <h2>Tu carrera como Senior Frontend empieza aquí.</h2>
        <p>Ya tienes las ganas. Nosotros tenemos el mapa y las herramientas. Únete a más de 1,000 estudiantes que ya están transformando la web.</p>
        <AppButton text="Ver Rutas de Aprendizaje" />
      </section>

    </div>
  )
}
