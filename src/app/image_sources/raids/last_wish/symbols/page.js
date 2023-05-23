import styles from "@image_components/LootTable.module.css";
import ImageHeader from "@image_components/ImageHeader";
import Image from "next/image";
import Background from "@backgrounds/last_wish.jpg";
import {BungieIcons} from "@components/BungieIcons";
import {LWSymbols} from "@image_components/LWSymbols";
import custom from "./custom.module.css"

/*
    branch_bird: Branch_Bird,
    circle_fish: Circle_Fish,
    curl_fish: Curl_Fish,
    down_bird: Down_Bird,
    eight_snake: Eight_Snake,
    fire_left_dragon: Fire_Left_Dragon,
    fire_right_dragon: Fire_Right_Dragon,
    flying_bird: Flying_Bird,
    infinity_snake: Infinity_Snake,
    left_bird: Left_Bird,
    left_fish: Left_Fish,
    spear_hold_dragon: Spear_Hold_Dragon,
    spear_neck_dragon: Spear_Neck_Dragon,
    two_snake: Two_Snake,
    up_fish: Up_Fish,
    uwu_snake: Uwu_Snake,
 */

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function LWSymbolsPage() {
    return (
        <body className={styles.main}>
            <Image src={Background} alt={""} className={styles.background}/>
            <div className={styles.wrapper}>
                <ImageHeader title={"Last Wish"} subtitle={"Symbols"} icon={BungieIcons.raids.last_wish} href={"chaosd2.com/lw/symbols"}/>
                <div className={custom.content}>
                    <div className={custom.table}>
                        <Symbol image={LWSymbols.eight_snake} name={"Eight Snake"}/>
                        <Symbol image={LWSymbols.infinity_snake} name={"Infinity Snake"}/>
                        <Symbol image={LWSymbols.two_snake} name={"Two Snake"}/>
                        <Symbol image={LWSymbols.uwu_snake} name={"Uwu Snake"}/>
                        <Symbol image={LWSymbols.circle_fish} name={"Circle Fish"}/>
                        <Symbol image={LWSymbols.curl_fish} name={"Curl Fish"}/>
                        <Symbol image={LWSymbols.up_fish} name={"Up Fish"}/>
                        <Symbol image={LWSymbols.left_fish} name={"Left Fish"}/>
                        <Symbol image={LWSymbols.fire_left_dragon} name={"Fire Left Dragon"}/>
                        <Symbol image={LWSymbols.fire_right_dragon} name={"Fire Right Dragon"}/>
                        <Symbol image={LWSymbols.spear_hold_dragon} name={"Spear Hold Dragon"}/>
                        <Symbol image={LWSymbols.spear_neck_dragon} name={"Spear Neck Dragon"}/>
                        <Symbol image={LWSymbols.branch_bird} name={"Branch Bird"}/>
                        <Symbol image={LWSymbols.down_bird} name={"Down Bird"}/>
                        <Symbol image={LWSymbols.flying_bird} name={"Flying Bird"}/>
                        <Symbol image={LWSymbols.left_bird} name={"Left Bird"}/>
                    </div>
                </div>
            </div>
        </body>
    );
}

function Symbol({ image, name }){
    return (
        <div className={custom.symbol}>
            <Image src={image} alt={name} width={120} height={120}/>
            <div className={custom.symbol_name}>{name}</div>
        </div>
    );
}