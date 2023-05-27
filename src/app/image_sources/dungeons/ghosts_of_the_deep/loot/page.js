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
                "fake_no_survivors",
                "fake_new_pacific_epitaph",
                "fake_cold_comfort",
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
                "fake_greasy_luck",
                "fake_cold_comfort"
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
                "fake_the_navigator"
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
                "tk_helm",
                "tk_hood",
                "tk_mask"
            ],
            "Arms": [
                "tk_gauntlets",
                "tk_gloves",
                "tk_grasps"
            ],
            "Chest": [
                "tk_plate",
                "tk_vestement",
                "tk_vest"
            ],
            "Legs": [
                "tk_greaves",
                "tk_boots",
                "tk_strides"
            ],
            "Class Item": [
                "tk_mark",
                "tk_bond",
                "tk_cloak"
            ]
        }
    }
}


export default function GhostsLoot() {
    return <LootTable activity="Ghosts of the Deep" href="chaosd2.com/ghosts/loot" data={data} icon={BungieIcons.dungeons.ghosts_of_the_deep} background={Background}/>
}