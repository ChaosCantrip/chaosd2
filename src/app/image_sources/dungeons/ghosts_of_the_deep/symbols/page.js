import styles from "@image_components/LootTable.module.css";
import Image from "next/image";
import Background from "@backgrounds/ghosts.jpg";
import {BungieIcons} from "@components/BungieIcons";
import ImageUnderConstruction from "@image_components/ImageUnderConstruction";
import UnfinishedSubtitle from "@image_components/UnfinishedSubtitle";
import custom from "./custom.module.css";
import header from "@image_components/ImageHeader.module.css"
import {GhostsSymbols} from "@image_components/GhostsSymbols";

/* TODO: This is a placeholder page. */

export const metadata = {
    other: {
        width: 760,
        height: 1080,
    }
}

export default function GhostsSymbolsPage() {
    return (
        <body className={custom.body}>
        <Image src={Background} alt={""} className={styles.background}/>
        <div className={styles.wrapper}>
            <Header title={"Ghosts of the Deep"} subtitle={"Symbols Table"} icon={BungieIcons.dungeons.ghosts_of_the_deep} href={"chaosd2.com/ghosts/symbols"}/>
            <UnfinishedSubtitle/>
            <div className={custom.spacer}/>
            <div className={custom.grid}>
                <Symbol name={"A"} icon={GhostsSymbols.a}/>
                <Symbol name={"Pizza"} icon={GhostsSymbols.pizza}/>
                <Symbol name={"Burger"} icon={GhostsSymbols.sandwich}/>
                <Symbol name={"Spider"} icon={GhostsSymbols.spider}/>
                <Symbol name={"Dot Spider"} icon={GhostsSymbols.dot_spider}/>
                <Symbol name={"C"} icon={GhostsSymbols.r}/>
                <Symbol name={"Dots Table"} icon={GhostsSymbols.dots_table}/>
                <Symbol name={"Equals Table"} icon={GhostsSymbols.equals_table}/>
                <Symbol name={"Divide"} icon={GhostsSymbols.divide}/>
            </div>
            <div className={custom.watermark}>
                <h2>chaosd2.com/ghosts/symbols</h2>
                <p className={header.date}>Updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric"})}</p>
            </div>
        </div>
        </body>
    );
}

function Header() {
    return (
        <div className={header.header}>
            <img className={header.logo} src={BungieIcons.dungeons.ghosts_of_the_deep} alt={""}/>
            <div className={header.header_text}>
                <h1 className={custom.title}>Ghosts of the Deep</h1>
                <p className={header.subtitle}>Symbols Table</p>
            </div>
        </div>
    )
}

function Symbol({ icon, name }){
    return (
        <div className={custom.symbol_wrapper}>
            <Image src={icon} alt={""} className={custom.symbol}/>
            <p className={custom.symbol_name}>{name}</p>
        </div>
    )
}