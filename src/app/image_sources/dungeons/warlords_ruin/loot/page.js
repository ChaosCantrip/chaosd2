import LootTable from "@image_components/LootTable";
import {BungieIcons} from "@components/BungieIcons";
import Background from "@backgrounds/warlords_ruin.jpg";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const data = {
    encounters: [
        {
            name: "Rathl, First Broken Knight of Fikrul",
            "items": [
                "839344841",
                "3381450498",
                "3668817296"
            ],
            "armour": [
                "Head",
                "Arms",
                "Legs",
            ]
        },
        {
            name: "Locus of Wailing Grief",
            "items": [
                "839344841",
                "3381450498",
                "2806569825"
            ],
            "armour": [
                "Arms",
                "Chest",
                "Class Item"
            ]
        },
        {
            name: "Hefnid's Vengeance, Blighted Chimera",
            "items": [
                "2806569825",
                "3381450498",
                "3668817296",
                "3886719505"
            ],
            "armour": [
            ]
        }
    ],
    armour: {
        set: "Dark Age Suit",
        hashes: {
            "Head": [
                "4090037601",
                "2771011469",
                "1933599476"
            ],
            "Arms": [
                "632989816",
                "3423574140",
                "806004493"
            ],
            "Chest": [
                "3735435664",
                "3683772388",
                "851401651"
            ],
            "Legs": [
                "2963224754",
                "2426502022",
                "1476803535"
            ],
            "Class Item": [
                "2662590925",
                "557092665",
                "3056827626"
            ]
        }
    }
}


export default function WarlordsLoot() {
    return <LootTable activity="Warlord's Ruin" href="chaosd2.com/wr/loot" data={data} icon={BungieIcons.dungeons.warlords_ruin} background={Background}/>
}