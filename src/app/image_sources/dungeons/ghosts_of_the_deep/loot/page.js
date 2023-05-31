import LootTable from "@image_components/LootTable";
import {BungieIcons} from "@components/BungieIcons";
import Background from "@backgrounds/ghosts.jpg";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const data = {
    encounters: [
        {
            name: "Hive Ritual",
            "items": [
                "3262192268",
                "1125217994",
                "839786290",
            ],
            "armour": [
                "Head",
                "Arms",
                "Legs",
            ]
        },
        {
            name: "Ecthar, Shield of Savathûn",
            "items": [
                "3262192268",
                "1757202961",
                "839786290"
            ],
            "armour": [
                "Arms",
                "Chest",
                "Class Item"
            ]
        },
        {
            name: "Simmumah ur-Nokru",
            "items": [
                "any",
                "1441805468"
            ],
            "armour": [
                "any"
            ]
        }
    ],
    armour: {
        set: "Armor of the Taken King",
        hashes: {
            "Head": [
                "2324998093",
                "540625098",
                "896458489"
            ],
            "Arms": [
                "2977663932",
                "587762963",
                "409820272"
            ],
            "Chest": [
                "2978918436",
                "457617725",
                "42941848"
            ],
            "Legs": [
                "2363472582",
                "322717029",
                "726878794"
            ],
            "Class Item": [
                "3722748537",
                "1961182320",
                "2733403573"
            ]
        }
    }
}


export default function GhostsLoot() {
    return <LootTable activity="Ghosts of the Deep" href="chaosd2.com/ghosts/loot" data={data} icon={BungieIcons.dungeons.ghosts_of_the_deep} background={Background}/>
}