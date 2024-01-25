import React from 'react'
import Joke from './Joke'


export default function MultiJoke() {
    return (
        <div>

            <Joke
                question="I got my daughter a fridge for her birthday."
                punchLine="I can't wait to see her face light up when she opens it."
                isPun={true}
                likes={10}
            />
            <Joke
                question="How did the hacker escape the police?"
                punchLine="He just ransomware!"
                isPun={false}
                likes={12}
            />
            <Joke
                question="Why don't pirates travel on mountain roads?"
                punchLine="Scurvy"
                isPun={true}
                likes={99}
            />
            <Joke
                question="Why do bees stay in the hive in the winter?"
                punchLine="Swarm"
                isPun={true}
                likes={-1}
            />
        </div>
    )
}
