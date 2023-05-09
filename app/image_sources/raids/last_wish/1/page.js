import styles from "@/lib/image_components/LootTable.module.css";
import ImageHeader from "@/lib/image_components/ImageHeader";
import Image from "next/image";
import Background from "@/public/images/backgrounds/last_wish.jpg";
import {BungieIcons} from "@/lib/BungieIcons";
import ImageUnderConstruction from "@/lib/image_components/ImageUnderConstruction";

/* TODO: This is a placeholder page. */

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function LWEncounter1() {
    return (
        <body className={styles.main}>
            <Image src={Background} alt={""} className={styles.background}/>
            <div className={styles.wrapper}>
                <ImageHeader title={"Last Wish"} subtitle={"Kalli, the Corrupted"} icon={BungieIcons.raids.lw} href={"chaosd2.com/lw/1"}/>
                <div className={styles.content}>
                    <ImageUnderConstruction/>
                </div>
            </div>
        </body>
    );
}