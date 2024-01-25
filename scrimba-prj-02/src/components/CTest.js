import React from "react"

import MultiJoke from './MultiJoke';
import MultiContact from './MultiContact'
import Joke from './Joke';
import jokesData from '../data/jokesData';


export function CTest() {

    const colors = [
        <h5>Red</h5>,
        <h5>Orange</h5>,
        <h5>Yellow</h5>,
        <h5>Green</h5>,
        <h5>Blue</h5>,
        <h5>Indigo</h5>,
        <h5>Violet</h5>
    ]

    const jokeElements = jokesData.map(joke => {
        return (
            <Joke
                question={joke.setup}
                punchLine={joke.punchline}
            />
        )
    });

    return (
        <div>
            <MultiContact />
            <MultiJoke />
            {colors}
            {jokeElements}
        </div>
    )
}