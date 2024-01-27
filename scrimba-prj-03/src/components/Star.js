import React from 'react'
import starEmpty from "../images/star-empty.png"
import starFilled from "../images/star-filled.png"


export default function Star(props) {
    const lbl = props.isFilled ? "Unmark as favorite" : "Mark as favorite"
    return (
        <button 
            onClick={props.handleClick}
            aria-label={lbl}
            aria-pressed={props.isFilled}>
            <img
                src={props.isFilled ? starFilled : starEmpty}
                className="cc--favorite"
                alt="Favourite star" />
        </button>
    )
}
