import { useState } from "react"
import AppButton from "../../components/AppButton"

export default function Counter() {
    const [ count, setCount ] = useState(0);

    function decrease() {
        if ( count > 0 )
            setCount(count - 1);
    }

    function increase() {
        setCount(count + 1)
    }

    return (
        <div className="counter-container">
            <AppButton text={"-"} onClick={decrease}/>
            <h2>{count}</h2>
            <AppButton text={"+"} onClick={increase} />
        </div>
    )
}