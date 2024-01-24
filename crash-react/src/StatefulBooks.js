import React from 'react';
import Book from './Book';

export default function StatefulBooks() {
    const [showBook, setShow] = React.useState(false);

    React.useEffect(() => {
        console.log("showBook changed");
    }, [showBook]);

    React.useEffect(() => {
        console.log("component mounted");
        return () => console.log("component unmounted");
    }, []);

    return (
        <div>
            {showBook && <Book title="The Lord of the Rings" />}
            <button onClick={() => setShow(!showBook)}>
                Show Book
            </button>
        </div>
    );
}
