import React from "react"

export default class Lifecycle extends React.Component {
    state = {
        character: {}
    }
    
    /**
     * Goal: get the first character from the Star Wars 
     * API and display the name on the screen
     */
    
    componentDidMount() {
        console.log("componentDidMount")
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ character: data })
            })
    }
    
    render() {
        console.log("render")
        return (
            <h1>Hello {this.state.character.name}</h1>
        )
    }
}