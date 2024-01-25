import React from "react"
import Contact from "./Contact"
import CatImgMr from "../images/mr-whiskerson.png"
import CatImgFluffykins from "../images/fluffykins.png"
import CatImgFelix from "../images/felix.png"
import CatImgPumpkin from "../images/pumpkin.png"


export default function MultiContact() {
    return (
        <div>
            <Contact
                img={CatImgMr}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img={CatImgFluffykins}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img={CatImgFelix}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact
                img={CatImgPumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}
