import React from "react";
import trollface from "../images/troll-face.png";


export default function Header() {
    function handleMouseOver() {
        console.log("Mouse over");
    }

    return (
        <header className="header" onMouseOver={handleMouseOver}>
            <img src={trollface} className="header--image" alt="logo" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>

        </header>
    );
}