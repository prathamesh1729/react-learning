import React from "react"
import starlogo from "../images/star.png"


export default function CardX(props) {
    console.log(props.item.openSpots);
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} alt="Main Card." className="card--image"/>
            <div className="card--stats">
                <img src={starlogo} alt="Star icon." className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <h2 className="card--text">{props.item.title}</h2>
            <p className="card--text"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}
