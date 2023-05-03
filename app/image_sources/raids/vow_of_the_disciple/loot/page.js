import LootTable from "@/lib/image_components/LootTable";
import {BungieIcons} from "@/lib/BungieIcons";
import Background from "@/public/images/backgrounds/vow.jpg";

const data = {
    encounters: [
        {
            name: "Acquisition",
            "items": [
                "3886416794",
                "768621510",
                "999767358"
            ],
            "armour": [
                "Helmet",
                "Chest",
                "Legs",
            ]
        },
        {
            name: "Caretaker",
            "items": [
                "3886416794",
                "3428521585",
                "613334176",
                "999767358"
            ],
            "armour": [
                "Helmet",
                "Gauntlets",
                "Class Item"
            ]
        },
        {
            name: "Exhibition",
            "items": [
                "3886416794",
                "768621510"
            ],
            "armour": [
                "Helmet",
                "Gauntlets",
                "Legs"
            ]
        },
        {
            name: "Rhulk, Disciple of the Witness",
            "items": [
                "3428521585",
                "613334176",
                "2534546147"
            ],
            "armour": [
                "Helmet",
                "Gauntlets",
                "Class Item",
            ]
        }
    ],
    armour: {
        set: "Resonant Fury",
        hashes: {
            "Helmet": [
                "362541459",
                "1649346047",
                "2316722050"
            ],
            "Gauntlets": [
                "2150515362",
                "1583213254",
                "1656263403"
            ],
            "Chest": [
                "1627640710",
                "3487540074",
                "3300312357"
            ],
            "Legs": [
                "365727964",
                "1566699968",
                "2748020989"
            ],
            "Class Item": [
                "2370089583",
                "4124357755",
                "2422261368"
            ]
        }
    }
}


export default function VowLoot() {
    return <LootTable activity="Vow of the Disciple" href="chaosd2.com/vow/loot" data={data} icon={BungieIcons.raids.votd} background={Background}/>
}