import custom from "./styles.module.css";
import styles from "@/lib/image_components/LootTable.module.css";
import Image from "next/image";
import Background from "@/public/images/backgrounds/root.jpg";
import {BungieIcons} from "@/lib/BungieIcons";
import Map from "./map.png";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function MacrocosmMap() {
    return (
        <body className={custom.body}>
            <Image src={Background} alt={""} className={styles.background}/>
            <main className={custom.main}>
                <div className={styles.header}>
                    <img className={styles.logo} src={BungieIcons.raids.ron} alt={""}/>
                    <div className={styles.header_text}>
                        <h1 className={styles.title}>Root of Nightmares</h1>
                        <p className={styles.subtitle}>Encounter 3 - Macrocosm (Planet Explicator)</p>
                    </div>
                    <div className={styles.watermark}>
                        <h2>chaosd2.com/root/3</h2>
                        <p className={styles.date}>Updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric"})}</p>
                    </div>
                </div>
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