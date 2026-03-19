import "./components.css"

export default function AppButton({ text, onClick }){
    return (
        <button className="app-btn" onClick={onClick}>{text}</button>
    )

}