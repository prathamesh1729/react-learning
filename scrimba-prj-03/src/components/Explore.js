import React from "react"


export default function Explore() {

    // const thingsArray = ["Thing 1", "Thing 2", "Thing 3"]
    const [things, setThings] = React.useState(["Thing 1", "Thing 2", "Thing 3"])
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    function addThing() {
        const newThing = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThing])
        console.log(things)
    }

    return (
        <div>
            <button onClick={addThing}>Add Item</button>
            {thingsElements}
        </div>
    )
}