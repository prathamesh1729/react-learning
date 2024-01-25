import React from "react"
import starlogo from "../images/star.png"


export default function Card(props) {
    console.log(props.openSpots);
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.coverImg}`)} alt="Main Card." className="card--image"/>
            <div className="card--stats">
                <img src={starlogo} alt="Star icon." className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h2 className="card--text">{props.title}</h2>
            <p className="card--text"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
