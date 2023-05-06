import custom from "./styles.module.css";
import styles from "@/lib/image_components/LootTable.module.css";
import {BungieIcons} from "@/lib/BungieIcons";
import Image from "next/image";
import Background from "@/public/images/backgrounds/vow.jpg";
import {VowSymbols} from "./VowSymbols";

export default function VowSymbolsPage() {
    return (
        <body className={custom.body}>
            <Image className={custom.background} src={Background} alt={""}/>
            <main className={custom.main}>
                <div className={styles.header}>
                    <img className={styles.logo} src={BungieIcons.raids.votd} alt={""}/>
                    <div className={styles.header_text}>
                        <h1 className={styles.title}>Vow of the Disciple</h1>
                        <p className={styles.subtitle}>Symbols</p>
                    </div>
                    <div className={styles.watermark}>
                        <h2>chaosd2.com/vow/symbols</h2>
                    </div>
                </div>
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