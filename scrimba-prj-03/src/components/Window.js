import React from 'react';
import WindowTracker from './WindowTracker';


export default function Window() {

    const [show, setShow] = React.useState(false);

    function handleClick() {
        setShow(prevValue => !prevValue);
    }

    return (
        <div className="container">
            <button onClick={handleClick}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    );
}