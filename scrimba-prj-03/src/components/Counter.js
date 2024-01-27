import React from "react"
import Count from "./Count"
import "./Counter.css"


export default function Counter() {

    const [count, setCount] = React.useState(0)

    function incrementCount() {
        // setCount(count + 1)
        // setCount(prevCount => prevCount + 1)
        setCount(function (prevCount) {
            return prevCount + 1
        });
    }

    function decrementCount() {
        // setCount(count - 1)
        // setCount(prevCount => prevCount - 1)
        setCount(function (prevCount) {
            return prevCount - 1
        });
    }

    console.log("Counter (App) component rendered")

    return (
        <div className="counter">
            <button className="counter--minus" onClick={decrementCount}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick={incrementCount}>+</button>
        </div>
    )
}
