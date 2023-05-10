import styles from "@image_components/LootTable.module.css";
import custom from "./styles.module.css";
import Image from "next/image";
import Background from "@backgrounds/duality.jpg";
import {BungieIcons} from "@components/BungieIcons";
import Diagram from "./diagram.png";
import ImageHeader from "@image_components/ImageHeader";

export const metadata = {
    other: {
        width: 760,
        height: 1080,
    }
}

export default function DualityEncounter1() {
    return (
        <body className={custom.body}>
            <Image src={Background} alt={""} className={custom.background}/>
            <main className={custom.main}>
                <ImageHeader title={"Duality"} subtitle={"Nightmare of Galhran"} icon={BungieIcons.dungeons.duality} href={"chaosd2.com/duality/1"}/>
                <div className={custom.diagram}>
                    <div className={custom.image_wrapper}>
                        <Image src={Diagram} alt={""} className={custom.image}/>
                    </div>
                </div>
            </main>
        </body>
    )
}