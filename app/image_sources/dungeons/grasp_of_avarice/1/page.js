import styles from "@/lib/image_components/LootTable.module.css";
import ImageHeader from "@/lib/image_components/ImageHeader";
import Image from "next/image";
import Background from "@/public/images/backgrounds/grasp.jpg";
import {BungieIcons} from "@/lib/BungieIcons";
import ImageUnderConstruction from "@/lib/image_components/ImageUnderConstruction";

/* TODO: This is a placeholder page. */

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function GraspEncounter1() {
    return (
        <body className={styles.main}>
        <Image src={Background} alt={""} className={styles.background}/>
        <div className={styles.wrapper}>
            <ImageHeader title={"Grasp of Avarice"} subtitle={"Phry'zia, the Insatiable"} icon={BungieIcons.dungeons.goa} href={"chaosd2.com/grasp/1"}/>
            <div className={styles.content}>
                <ImageUnderConstruction/>
            </div>
        </div>
        </body>
    );
}