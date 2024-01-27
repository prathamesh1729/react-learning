import React from "react";
import memesData from "../data/memesData";


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        // Pick a random meme from the array of memes
        const randomIndex = Math.floor(Math.random() * allMemeImages.data.memes.length);
        console.log(`Random meme: ${allMemeImages.data.memes[randomIndex].url}`);
        setMeme(prevValue => {
            return {
                ...prevValue,
                randomImage: allMemeImages.data.memes[randomIndex].url
            }
        });
    }

    return (
        <main className="meme">
            <div className="form">
                <div>
                    <label className="form--label">Top Text</label>
                    <input
                        type="text"
                        className="form--input"
                        placeholder="Shut up" />
                </div>
                <div>
                    <label className="form--label">Bottom Text</label>
                    <input
                        type="text"
                        className="form--input"
                        placeholder="and take my money" />
                </div>
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} alt="Meme" className="meme--image" />

        </main>
    );
}