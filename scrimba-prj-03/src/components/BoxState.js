import React from "react"


export default function Box(props) {

    // Derived state. State derived from incoming props. 
    // This is probably not required and is not ideal way to do it.
    // Reference: https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    const [isOn, setIsOn] = React.useState(props.on)

    function handleClick() {
        setIsOn(prevIsOn => !prevIsOn)
    }

    const styles = {
        backgroundColor: isOn ? "#222222" : "transparent"
    }

    return (
        <div
            className="box"
            style={styles}
            onClick={handleClick}>
        </div>
    )
}