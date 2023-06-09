import LootTable from "@image_components/LootTable";
import {BungieIcons} from "@components/BungieIcons";
import Background from "@backgrounds/duality.jpg";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const data = {
    encounters: [
        {
            name: "Nightmare of Galhran",
            "items": [
                "2026087437",
                "2263839058"
            ],
            "armour": [
                "Head",
                "Arms",
                "Legs",
            ]
        },
        {
            name: "Opening the Vault",
            "items": [
                "3000847393",
                "3652506829"
            ],
            "armour": [
                "Arms",
                "Chest",
                "Class Item"
            ]
        },
        {
            name: "Nightmare of Caiatl",
            "items": [
                "1780464822",
                "2194955522",
                "3664831848"
            ],
            "armour": [
            ]
        }
    ],
    armour: {
        set: "Deep Explorer Armour",
        hashes: {
            "Head": [
                "2610749098",
                "3262689948",
                "3326914239"
            ],
            "Arms": [
                "2616310259",
                "322599957",
                "3260781446"
            ],
            "Chest": [
                "2935559305",
                "145651147",
                "561897072"
            ],
            "Legs": [
                "2649394513",
                "2724719415",
                "3798520466"
            ],
            "Class Item": [
                "737550160",
                "2797334754",
                "2694773307"
            ]
        }
    }
}


export default function DualityLoot() {
    return <LootTable activity="Duality" href="chaosd2.com/duality/loot" data={data} icon={BungieIcons.dungeons.duality} background={Background}/>
}