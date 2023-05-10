import custom from "./styles.module.css";
import styles from "@image_components/LootTable.module.css";
import {BungieIcons} from "@lib/BungieIcons";
import Image from "next/image";
import Background from "@backgrounds/vow.jpg";
import {VowSymbols} from "./VowSymbols";
import ImageHeader from "@image_components/ImageHeader";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function VowSymbolsPage() {
    return (
        <body className={custom.body}>
            <Image className={custom.background} src={Background} alt={""}/>
            <main className={custom.main}>
                <ImageHeader title={"Vow of the Disciple"} subtitle={"Symbols"} icon={BungieIcons.raids.votd} href={"chaosd2.com/vow/symbols"}/>
                <div className={custom.content}>
                    <div className={custom.grid}>
                        <div className={custom.grid_row}>
                            <Symbol src={VowSymbols.AscendantPlane} name={"Ascendant Plane"}/>
                            <Symbol src={VowSymbols.BlackGarden} name={"Black Garden"}/>
                            <Symbol src={VowSymbols.BlackHeart} name={"Black Heart"}/>
                            <Symbol src={VowSymbols.Blank} name={"Blank"}/>
                            <Symbol src={VowSymbols.Commune} name={"Commune"}/>
                            <Symbol src={VowSymbols.Darkness} name={"Darkness"}/>
                            <Symbol src={VowSymbols.Drink} name={"Drink"}/>
                        </div>
                        <div className={custom.grid_row}>
                            <Symbol src={VowSymbols.Earth} name={"Earth"}/>
                            <Symbol src={VowSymbols.Enter} name={"Enter"}/>
                            <Symbol src={VowSymbols.Fleet} name={"Fleet"}/>
                            <Symbol src={VowSymbols.Grief} name={"Grief"}/>
                            <Symbol src={VowSymbols.Give} name={"Give"}/>
                            <Symbol src={VowSymbols.Guardian} name={"Guardian"}/>
                            <Symbol src={VowSymbols.Hive} name={"Hive"}/>
                        </div>
                        <div className={custom.grid_row}>
                            <Symbol src={VowSymbols.Kill} name={"Kill"}/>
                            <Symbol src={VowSymbols.Knowledge} name={"Knowledge"}/>
                            <Symbol src={VowSymbols.Light} name={"Light"}/>
                            <Symbol src={VowSymbols.Love} name={"Love"}/>
                            <Symbol src={VowSymbols.Pyramid} name={"Pyramid"}/>
                            <Symbol src={VowSymbols.Savathun} name={"Savathun"}/>
                            <Symbol src={VowSymbols.Scorn} name={"Scorn"}/>
                        </div>
                        <div className={custom.grid_row}>
                            <Symbol src={VowSymbols.Stop} name={"Stop"}/>
                            <Symbol src={VowSymbols.Tower} name={"Tower"}/>
                            <Symbol src={VowSymbols.Traveller} name={"Traveller"}/>
                            <Symbol src={VowSymbols.Witness} name={"Witness"}/>
                            <Symbol src={VowSymbols.Worm} name={"Worm"}/>
                            <Symbol src={VowSymbols.Worship} name={"Worship"}/>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

function Symbol({ src, name }) {
    return (
        <div className={custom.symbol}>
            <Image src={src} alt={name} className={custom.image}/>
            <h3>{name}</h3>
        </div>
    )
}