import styles from "@/lib/image_components/LootTable.module.css";
import custom from "./styles.module.css";
import Image from "next/image";
import Background from "@/public/images/backgrounds/duality.jpg";
import {BungieIcons} from "@/lib/BungieIcons";
import Diagram from "./diagram.png";
import ImageHeader from "@/lib/image_components/ImageHeader";

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