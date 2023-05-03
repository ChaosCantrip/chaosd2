import LootTable from "@/lib/image_components/LootTable";
import {BungieIcons} from "@/lib/BungieIcons";
import Background from "@/public/images/backgrounds/spire.jpg";

const data = {
    encounters: [
        {
            name: "Ascend the Spire",
            "items": [
                "4070357005",
                "8293111",
                "487205709"
            ],
            "armour": [
                "Head",
                "Arms",
                "Legs",
            ]
        },
        {
            name: "Silence the Spire",
            "items": [
                "1555959830",
                "487205709",
            ],
            "armour": [
                "Arms",
                "Chest",
                "Class Item"
            ]
        },
        {
            name: "Persys, Primorial Ruin",
            "items": [
                "3138208275",
                "2306182339",
                "4174431791"
            ],
            "armour": [
            ]
        }
    ],
    armour: {
        set: "Tex Mechanica Custom",
        hashes: {
            "Head": [
                "2976233114",
                "2599025960",
                "2014814167"
            ],
            "Arms": [
                "918537443",
                "1480429241",
                "1088225118"
            ],
            "Chest": [
                "597199405",
                "3088058655",
                "3185363346"
            ],
            "Legs": [
                "2839517205",
                "119121067",
                "1932168248"
            ],
            "Class Item": [
                "3006077984",
                "506181038",
                "3780604323"
            ]
        }
    }
}


export default function SpireLoot() {
    return <LootTable activity="Spire of the Watcher" href="chaosd2.com/spire/loot" data={data} icon={BungieIcons.dungeons.sotw} background={Background}/>
}