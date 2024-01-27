import React from "react";
import boxesData from "../data/boxesData";
import "./Boxes.css";
import Box from "./Box";


export default function Boxes(props) {

    const [boxes, setBoxes] = React.useState(boxesData)
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    function toggle(id) {
        console.log(`Clicked ${id}`);

        setBoxes(function(prevBoxes) {
            return prevBoxes.map((box) => {
                // return {
                //     id: box.id,
                //     on: (box.id === id ? !box.on : box.on)
                // }
                return box.id === id ? {...box, on: !box.on} : box
            })
        });
    }

    const boxElements = boxes.map(box => {
        return (
            <Box
                key={box.id}
                id={box.id}
                on={box.on}
                toggle={toggle} 
                toggleAlt={() => toggle(box.id)}/>
        )
    })

    return (
        <main className="Boxes">
            <h1>Boxes</h1>
            {boxElements}
        </main>
    );
}
