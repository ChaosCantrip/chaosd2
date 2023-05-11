import custom from "./styles.module.css";
import styles from "@image_components/LootTable.module.css";
import Image from "next/image";
import Background from "@backgrounds/root.jpg";
import {BungieIcons} from "@components/BungieIcons";
import Map from "./map.png";
import ImageHeader from "@image_components/ImageHeader";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function RootEncounter3() {
    return (
        <body className={custom.body}>
            <Image src={Background} alt={""} className={styles.background}/>
            <main className={custom.main}>
                <ImageHeader title={"Root of Nightmares"} subtitle={"Encounter 3 - Macrocosm"} icon={BungieIcons.raids.root_of_nightmares} href={"chaosd2.com/root/3"}/>
                <div className={custom.content}>
                    <div className={custom.image_card}>
                        <div className={custom.text}>
                            <div className={custom.challenges}>
                                <div className={custom.challenge}>
                                    <h2>Challenge - Cosmic Equilibrium</h2>
                                    <p>Move all four of the light planets to the right side, and all four of the dark planets to the left.</p>
                                </div>
                                <div className={custom.challenge}>
                                    <h2>Triumph - Singular Orbit</h2>
                                    <p>A player cannot gain "Planetary Insight" more than once in each planet moving cycle.</p>
                                    <p>Triangle players kill one Lietenant each in the first phase, and move all four planets.</p>
                                    <p>Ad-Clear players kill two Lieutenants each in the Insight Phase, and communicate the central 3 planets.</p>
                                </div>
                            </div>
                            <div className={custom.key}>
                                <div className={custom.key_item}>
                                    <div className={`${custom.circle} ${custom.red}`}></div>
                                    <h3>Terrestrial Lietenant Spawn</h3>
                                </div>
                                <div className={custom.key_item}>
                                    <div className={`${custom.circle} ${custom.orange}`}></div>
                                    <h3>Colossus Spawn</h3>
                                </div>
                            </div>
                        </div>
                        <div className={custom.image_wrapper}>
                            <Image src={Map} alt={""} className={custom.image}/>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}