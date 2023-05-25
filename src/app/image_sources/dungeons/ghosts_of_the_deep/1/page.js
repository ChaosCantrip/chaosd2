import styles from "@image_components/LootTable.module.css";
import ImageHeader from "@image_components/ImageHeader";
import Image from "next/image";
import Background from "@backgrounds/ghosts.jpg";
import {BungieIcons} from "@components/BungieIcons";
import ImageUnderConstruction from "@image_components/ImageUnderConstruction";

/* TODO: This is a placeholder page. */

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function GhostsEncounter1() {
    return (
        <body className={styles.main}>
        <Image src={Background} alt={""} className={styles.background}/>
        <div className={styles.wrapper}>
            <ImageHeader title={"Ghosts of the Deep"} subtitle={"Not Yet Released"} icon={BungieIcons.dungeons.ghosts_of_the_deep} href={"chaosd2.com/ghosts/1"}/>
            <div className={styles.content}>
                <ImageUnderConstruction/>
            </div>
        </div>
        </body>
    );
}