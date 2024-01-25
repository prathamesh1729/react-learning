import React from 'react'
import './Contact.css';
import catwhiskers from "../images/mr-whiskerson.png"
import phoneicon from "../images/phone-icon.png"
import mailicon from "../images/mail-icon.png"


export default function Contact(props) {
    // console.log(props);
    return (
        <div className="contact-card">
            <img src={props.img} alt='Cat Profile Pic'/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneicon} alt='Phone Icon.'/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailicon} alt='Mail Icon.'/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
