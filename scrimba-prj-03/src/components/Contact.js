import React from "react"
import "./Contact.css"
import userImg from "../images/user.png"
import Star from "./Star"


export default function Contact() {

    const [contact, setContact] = React.useState({
        firstName: "Bill",
        lastName: "Murray",
        phone: "+1-555-555-5555",
        email: "itsmyname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevState => {
            return {
                ...prevState,
                isFavorite: !prevState.isFavorite
            }
        })
    }

    return (
        <main className="cc--main">
            <article className="cc">
                <img src={userImg} className="cc--image" alt="Contact face" />
                <div className="cc--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="cc--name">{contact.firstName + " " + contact.lastName}</h2>
                    <p className="cc--contact">{contact.phone}</p>
                    <p className="cc-contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}