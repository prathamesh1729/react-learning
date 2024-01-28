import React from "react";
// import memesData from "../data/memesData";


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState([]);

    function getMemeImage() {
        // Pick a random meme from the array of memes
        const randomIndex = Math.floor(Math.random() * allMemeImages.length);
        console.log(`Random meme: ${allMemeImages[randomIndex].url}`);
        setMeme(prevValue => {
            return {
                ...prevValue,
                randomImage: allMemeImages[randomIndex].url
            }
        });
    }

    React.useEffect(() => {
        console.log("Fetching memes from API...");
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                setAllMemeImages(response.data.memes);
            });
    }, []);

    // Using async functions in useEffect
    // React.useEffect(() => {
    //     console.log("Meme updated!");
    //     async function getMemes() {
    //         const response = await fetch("https://api.imgflip.com/get_memes");
    //         const json = await response.json();
    //         setAllMemeImages(json.data.memes);
    //     }
    //     getMemes();
    // }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevValue => {
            return {
                ...prevValue,
                [name]: value
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
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        placeholder="Shut up" />
                </div>
                <div>
                    <label className="form--label">Bottom Text</label>
                    <input
                        type="text"
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        placeholder="and take my money" />
                </div>
                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} alt="Meme" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    );
}