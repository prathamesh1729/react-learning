import React from "react";


export default function Api() {

    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1);

    console.log("Component rendered")

    React.useEffect(function () {
        console.log("useEffect ran");

        // fetch("https://swapi.dev/api/people/1")
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        fetch(`https://swapi.dev/api/people/${count}`)
            .then(response => response.json())
            .then(data => setStarWarsData(data));
    }, [count]);

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    );
}