import styles from "@image_components/LootTable.module.css";
import ImageHeader from "@image_components/ImageHeader";
import Image from "next/image";
import Background from "@backgrounds/crotas_end.jpg";
import {BungieIcons} from "@components/BungieIcons";
import ImageUnderConstruction from "@image_components/ImageUnderConstruction";

/* TODO: This is a placeholder page. */

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function CrotaEncounter4() {
    return (
        <body className={styles.main}>
        <Image src={Background} alt={""} className={styles.background}/>
        <div className={styles.wrapper}>
            <ImageHeader title={"Crota's End"} subtitle={"Crota, Son of Oryx"} icon={BungieIcons.raids.crotas_end} href={"chaosd2.com/crota/4"}/>
            <div className={styles.content}>
                <ImageUnderConstruction/>
            </div>
        </div>
        </body>
    );
}