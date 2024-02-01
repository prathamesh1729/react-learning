import React from "react"
import "./Decision.css"


export default class Decision extends React.Component {

    constructor() {
        super()
        this.state = {
            'goOut': 'Yes'
        }

        this.toggleGoOut = this.toggleGoOut.bind(this);
    }
    
    toggleGoOut() {
        this.setState(prevState => {
            return {
                goOut: prevState.goOut === "Yes" ? "No" : "Yes"
            }
        })
    }

    render() {
        return (
            <div className="state">
                <h2 className="state--title">Should I go out tonight?</h2>
                <div className="state--value" onClick={this.toggleGoOut}>
                    <h1>{this.state.goOut}</h1>
                </div>
            </div>
        )
    }
}
