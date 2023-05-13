import custom from "./styles.module.css";
import Background from "@backgrounds/vow.jpg";
import Icon1 from "@images/icons/vow_of_the_disciple/pyramid.png";
import Icon2 from "@images/icons/vow_of_the_disciple/give.png";
import Icon3 from "@images/icons/vow_of_the_disciple/darkness.png";
import Icon4 from "@images/icons/vow_of_the_disciple/traveller.png";
import Icon5 from "@images/icons/vow_of_the_disciple/worship.png";
import Icon6 from "@images/icons/vow_of_the_disciple/light.png";
import Icon7 from "@images/icons/vow_of_the_disciple/stop.png";
import Icon8 from "@images/icons/vow_of_the_disciple/guardian.png";
import Icon9 from "@images/icons/vow_of_the_disciple/kill.png";
import Image from "next/image";
import {BungieIcons} from "@components/BungieIcons";
import ImageHeader from "@image_components/ImageHeader";
import styles from "@image_components/LootTable.module.css";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function VowRedBorder() {
    return (
        <body className={custom.body}>
        <Image src={Background} alt={""} className={styles.background}/>
        <main className={custom.main}>
            <ImageHeader title={"Vow of the Disciple"} subtitle={"Red Border Chest"} icon={BungieIcons.raids.vow_of_the_disciple} href={"chaosd2.com/vow/rb"}/>
            <div className={custom.content}>
                <div className={custom.grid}>
                    <RBLocation location={"Pyramid"} image={Icon1} >
                        <p>At the bottom of the big drop after the payload section, turn around to find a door, with a Crux beside it.</p>
                    </RBLocation>
                    <RBLocation location={"Give"} image={Icon2} >
                        <p>Before the first encounter, and after the room where you can interact with all the symbols, there is a room full of frozen Cabal. Across from where you enter is the Give door, with the Crux on top of it.</p>
                    </RBLocation>
                    <RBLocation location={"Darkness"} image={Icon3} >
                        <p>On a roof on the left side of the room is a statue of a Sphinx. There is a Crux between it's feet. Shoot it, and the door on the wall behind the Sphinx will open.</p>
                    </RBLocation>
                    <RBLocation location={"Traveler"} image={Icon4} >
                        <p>After the first encounter, there will be a room containing two glowing red cubes. The door is at the back of the room, and the Crux is on the ledge above it.</p>
                    </RBLocation>
                    <RBLocation location={"Worship"} image={Icon5} >
                        <p>Inside the final stand room for Caretaker, look to the left, and shoot the Crux. This will open the door for Worship on the right side of the room.</p>
                    </RBLocation>
                    <RBLocation location={"Light"} image={Icon6} >
                        <p>In the room with the first Crux used to stabilise the paths, there is a statue. The Crux is above the statue, and the door for Light on the right of it.</p>
                    </RBLocation>
                    <RBLocation location={"Stop"} image={Icon7} >
                        <p>Where the secret chest is inside the jumping puzzle, drop down into the room where the enemies are. The Crux and door are in that room.</p>
                    </RBLocation>
                    <RBLocation location={"Guardian"} image={Icon8} >
                        <p>After Exhibition, go up the stairs on the left-hand side. The Crux is found on the far left of the area, just off the ledge. The door is floating above the stairs you just came up.</p>
                    </RBLocation>
                    <RBLocation location={"Kill"} image={Icon9} >
                        <p>At the top of the climb before you fight Rhulk, turn around. The Crux is floating at the top of the back wall. This will open a door on the right hand side of the top floor.</p>
                    </RBLocation>
                </div>
                <div className={custom.text_wrapper}>
                    <div className={custom.side_text}>
                        <h2>"The Disciple recognizes your offering..."</h2>
                        <p>After the payload section, there is a totem with three symbols on it. Memorize those symbols.</p>
                        <p>During the raid, there are 9 rooms with symbols inside them. Each room has a door, accompanied by a crux that will open the door.</p>
                        <p>The symbol inside will be dark. Shoot it to activate it.</p>
                        <p>Activate the 3 symbols shows on that totem, leaving the other 6 dark, and a message will appear - "The Disciple recognizes your offering..."</p>
                        <p>A chest containing a red border weapon will appear after you defeat Rhulk.</p>
                        <p>The chest may be accessed once per account, per weekly reset.</p>
                    </div>
                </div>
            </div>
        </main>
        </body>
    )
}

function RBLocation({ location, image, children }) {
    return (
        <div className={custom.grid_element}>
            <div className={custom.location}>
                <h3 className={custom.name}>{location}</h3>
                <div className={custom.image_wrapper}>
                    <Image src={image} alt={""} className={custom.image}/>
                </div>
            </div>
            <div className={custom.text}>
                {children}
            </div>
        </div>
    )
}