import React from "react"

export default function Joke(props) {

    const [isShown, setShown] = React.useState(false);

    function clickHandler() {
        setShown(prevValue => {
            return !prevValue
        })
    }

    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            {isShown && <h3 style={{color: !props.question && "red"}}>Answer: {props.punchLine}</h3>}
            {props.likes && <p>Likes: {props.likes + 1}</p>}
            <button onClick={clickHandler} >{isShown ? "Hide" : "Show"} Punchline!</button>
            <hr/>
        </div>
    )
}
