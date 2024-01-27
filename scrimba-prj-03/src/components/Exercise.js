import React from "react"
import "./Exercise.css"


export default function Exercise() {
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    const [isImportant, setIsImportant] = React.useState("Yes")
    console.log(isImportant)

    function handleClick() {
        setIsImportant(function (prevState) {
            return (prevState === "Yes") ? "No" : "Yes"
        })
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <button className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </button>
        </div>
    )
}
