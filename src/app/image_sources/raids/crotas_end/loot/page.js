import LootTable from "@image_components/LootTable";
import {BungieIcons} from "@components/BungieIcons";
import Background from "@backgrounds/crotas_end.jpg";
import styles from "@image_components/LootTable.module.css";
import Image from "next/image";
import ImageHeader from "@image_components/ImageHeader";
import ImageUnderConstruction from "@image_components/ImageUnderConstruction";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const data = {
    encounters: [
        {
            name: "Crypt Security",
            "items": [
                "1392919471",
            ],
            "armour": [
                "Arms",
                "Legs",
                "Class Item"
            ]
        },
        {
            name: "Atraks-1",
            "items": [
                "4248569242",
                "2990047042"
            ],
            "armour": [
                "Arms",
                "Legs",
                "Class Item"
            ]
        },
        {
            name: "Nuclear Descent",
            "items": [
                "3281285075",
            ],
            "armour": [
                "Arms",
                "Chest",
                "Class Item"
            ]
        },
        {
            name: "Taniks, the Abomination",
            "items": [
                "3366545721",
                "4230965989",
                "2399110176"
            ],
            "armour": [
                "Head",
                "Chest",
                "Legs",
            ]
        }
    ],
    armour: {
        set: "Legacy's Oath",
        hashes: {
            "Head": [
                "3015085684",
                "893751566",
                "1462908657"
            ],
            "Arms": [
                "1887490701",
                "2343515647",
                "79460168"
            ],
            "Chest": [
                "751162931",
                "4001862073",
                "3975122240"
            ],
            "Legs": [
                "2558289743",
                "1264765761",
                "756445218"
            ],
            "Class Item": [
                "2956588906",
                "1021060724",
                "2902277629"
            ]
        }
    }
}

function temp() {
    return (
        <body className={styles.main}>
        <Image src={Background} alt={""} className={styles.background}/>
        <div className={styles.wrapper}>
            <ImageHeader title={"Crota's End"} subtitle={"Loot Table"} icon={BungieIcons.raids.crotas_end} href={"chaosd2.com/crota/loot"}/>
            <div className={styles.content}>
                <ImageUnderConstruction/>
            </div>
        </div>
        </body>
    );
}

export default function CrotaLoot() {
    return temp();
    return <LootTable activity="Crota's End" href="chaosd2.com/crota/loot" data={data} icon={BungieIcons.raids.crotas_end} background={Background}/>
}