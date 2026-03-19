import Hero from "../modules/Home/Hero"
import MainContent from "../modules/Home/MainContent"
import ActionSection from "../modules/Home/ActionSection"
import "../styles/Home.css"

export default function Home () {
    return (
        <div style={{ flex: 1, width:'100%'}}>
            <Hero/>
            <MainContent/>
            <ActionSection/> 
        </div> 
    )
}