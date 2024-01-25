import React from "react"

export default function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "red"}}>Answer: {props.punchLine}</h3>
            {props.likes && <p>Likes: {props.likes + 1}</p>}
            <hr/>
        </div>
    )
}
