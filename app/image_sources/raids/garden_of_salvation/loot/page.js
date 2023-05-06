import LootTable from "@/lib/image_components/LootTable";
import {BungieIcons} from "@/lib/BungieIcons";
import Background from "@/public/images/backgrounds/garden.jpg";

const data = {
    encounters: [
        {
            name: "Embrace",
            "items": [
                "4095896073",
                "2209003210"
            ],
            "armour": [
                "Legs",
            ]
        },
        {
            name: "Undergrowth",
            "items": [
                "4020742303",
                "3385326721"
            ],
            "armour": [
                "Arms"
            ]
        },
        {
            name: "Defeat the Consecrated Mind",
            "items": [
                "2408405461",
                "48643186",
            ],
            "armour": [
                "Chest"
            ]
        },
        {
            name: "Defeat the Sanctified Mind",
            "items": [
                "3454326177"
            ],
            "armour": [
                "Head",
                "Class Item",
            ]
        }
    ],
    armour: {
        set: "Vex Armour",
        hashes: {
            "Head": [
                "959087754",
                "407842012",
                "2367878193"
            ],
            "Arms": [
                "964752083",
                "1804192853",
                "984532872"
            ],
            "Chest": [
                "3876398589",
                "210208587",
                "1789501056"
            ],
            "Legs": [
                "275145509",
                "3380315063",
                "2085872226"
            ],
            "Class Item": [
                "1043419184",
                "2861892194",
                "1141217085"
            ]
        }
    }
}


export default function GardenLoot() {
    return <LootTable activity="Garden of Salvation" href="chaosd2.com/garden/loot" data={data} icon={BungieIcons.raids.gos} background={Background}/>
}