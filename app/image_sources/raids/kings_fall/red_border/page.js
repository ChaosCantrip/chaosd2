import custom from "./styles.module.css";
import styles from "@/lib/image_components/LootTable.module.css";
import Background from "@/public/images/backgrounds/kf.jpg";
import Icon1 from "@/public/images/icons/kings_fall/1.png";
import Icon2 from "@/public/images/icons/kings_fall/2.png";
import Icon3 from "@/public/images/icons/kings_fall/3.png";
import Icon4 from "@/public/images/icons/kings_fall/4.png";
import Icon5 from "@/public/images/icons/kings_fall/5.png";
import Icon6 from "@/public/images/icons/kings_fall/6.png";
import Icon7 from "@/public/images/icons/kings_fall/7.png";
import Icon8 from "@/public/images/icons/kings_fall/8.png";
import Icon9 from "@/public/images/icons/kings_fall/9.png";
import Image from "next/image";
import {BungieIcons} from "@/lib/BungieIcons";

export default function KFRedBorder() {
    return (
        <body className={custom.body}>
            <Image src={Background} alt={""} className={custom.background}/>
            <main className={custom.main}>
                <div className={styles.header}>
                    <img className={styles.logo} src={BungieIcons.raids.kf} alt={""}/>
                    <div className={styles.header_text}>
                        <h1 className={styles.title}>King's Fall</h1>
                        <p className={styles.subtitle}>Red Border Chest Puzzle</p>
                    </div>
                    <div className={styles.watermark}>
                        <h2>chaosd2.com/kf/rb</h2>
                    </div>
                </div>
                <div className={custom.content}>
                    <div className={custom.grid}>
                        <RBLocation number={"1"} location={"Swinging Pendulums"} image={Icon1} text={"Jump onto the pendulums and turn around. The symbol is just beneath the platform you jumped from."}/>
                        <RBLocation number={"2"} location={"1st Secret Chest"} image={Icon2} text={"At the exit of the jumping puzzle, before going through the door your fireteam have opened, jump off the ship and up to the door on the left of the wall. The symbol is just above that door, on the other side."}/>
                        <RBLocation number={"3"} location={"Totems Encounter"} image={Icon3} text={"In the left totem room, the symbol is on the wall above the high balcony."}/>
                        <RBLocation number={"4"} location={"Warpriest Encounter"} image={Icon4} text={"Go up all of the stairs on the right side. The symbol is on the wall all the way at the top."}/>
                        <RBLocation number={"5"} location={"Golgoroth's Maze"} image={Icon5} text={"The symbol is inside the last hole of the maze."}/>
                        <RBLocation number={"6"} location={"Golgoroth Encounter"} image={Icon6} text={"Inside Golgy's pit, there is a hidey hole on the left. The symbol is in there."}/>
                        <RBLocation number={"7"} location={"Dick Wall Secret Chest"} image={Icon7} text={"This symbol is above the 3rd secret chest, on the opposite side of the dick wall canyon."}/>
                        <RBLocation number={"8"} location={"Dick Wall Exit"} image={Icon8} text={"This symbol is on the ceiling of the door as you go to exit the dick wall."}/>
                        <RBLocation number={"9"} location={"Sisters Encounter"} image={Icon9} text={"The final symbol is above the door after you enter the arena for Sisters/Oryx"}/>
                    </div>
                    <div className={custom.text_wrapper}>
                        <div className={custom.side_text}>
                            <h2>"The Runes Accept Your Offering"</h2>
                            <p>After the orb dunking opening encounter, go into the space under the portal. There will be 3 symbols inside there.</p>
                            <p>Those symbols can be found around the raid. Shoot the flaming circles to turn them on. If a symbol is wrong, you can shoot it to turn it back off.</p>
                            <p>When all 3 symbols have been activated, the message "The runes accept your offering" will appear bottom-left of the screen. The red border chest will appear after you defeat Oryx.</p>
                            <p>All of the symbols must be activated in one complete run, they will not be carried through checkpoints.</p>
                            <p>Red Border Chest is accessible once per account, per weekly reset.</p>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

function RBLocation({ number, location, image, text }) {
    return (
        <div className={custom.grid_element}>
            <div className={custom.location}>
                <h3 className={custom.number}>{number}</h3>
                <h3>{location}</h3>
            </div>
            <div className={custom.image_wrapper}>
                <Image src={image} alt={""} className={custom.image}/>
            </div>
            <div className={custom.text}>
                <h3>{text}</h3>
            </div>
        </div>
    )
}