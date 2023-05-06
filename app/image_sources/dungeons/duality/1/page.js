import styles from "@/lib/image_components/LootTable.module.css";
import custom from "./styles.module.css";
import Image from "next/image";
import Background from "@/public/images/backgrounds/duality.jpg";
import {BungieIcons} from "@/lib/BungieIcons";
import Diagram from "./diagram.png";

export const metadata = {
    other: {
        width: 760,
        height: 1080,
    }
}

export default function Duality1() {
    return (
        <body className={custom.body}>
            <Image src={Background} alt={""} className={custom.background}/>
            <main className={custom.main}>
                <div className={styles.header}>
                    <img className={styles.logo} src={BungieIcons.dungeons.duality} alt={""}/>
                    <div className={styles.header_text}>
                        <h1 className={styles.title}>Duality</h1>
                        <p className={styles.subtitle}>Encounter 1</p>
                    </div>
                    <div className={styles.watermark}>
                        <h2>chaosd2.com/duality/1</h2>
                        <p className={styles.date}>Updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric"})}</p>
                    </div>
                </div>
                <div className={custom.diagram}>
                    <div className={custom.image_wrapper}>
                        <Image src={Diagram} alt={""} className={custom.image}/>
                    </div>
                </div>
            </main>
        </body>
    )
}