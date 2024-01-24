import React from "react";
import Book from "./Book";

const bookList = [
    { "title": "The Lord of the Rings" },
    { "title": "The Hobbit" },
    { "title": "The Silmarillion" },
    { "title": "The Children of Húrin" },
    { "title": "Unfinished Tales" },
    { "title": "The History of Middle-earth" },
    { "title": "Bilbo's Last Song"},
    { "title": "The Adventures of Tom Bombadil"},
];

export default function Books() {

    return (
        <ul>
            {/* <Book title="The Lord of the Rings" /> */}
            {/* <Book title="The Hobbit" /> */}
            {bookList.map((book) => <Book title={book.title} />)}
        </ul>
    );
}
