import LootTable from "@/lib/image_components/LootTable";
import {BungieIcons} from "@/lib/BungieIcons";
import Background from "@/public/images/backgrounds/grasp.jpg";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const data = {
    encounters: [
        {
            name: "Phry'zia, the Insatiable",
            "items": [
                "2563012876"
            ],
            "armour": [
                "Legs",
                "Class Item"
            ]
        },
        {
            name: "Fallen Shield",
            "items": [
                "2139640995",
            ],
            "armour": [
                "Arms",
                "Chest"
            ]
        },
        {
            name: "Captain Avarokk, the Covetous",
            "items": [
                "2563012876",
                "2139640995",
                "4164201232",
                "235827225"
            ],
            "armour": [
            ]
        }
    ],
    armour: {
        set: "Descending/Twisting/Corrupting Echo",
        hashes: {
            "Head": [
                "3473581026",
                "2744480004",
                "1832715465"
            ],
            "Arms": [
                "2771648715",
                "2308793821",
                "3536211008"
            ],
            "Chest": [
                "549825413",
                "3587911011",
                "2515293448"
            ],
            "Legs": [
                "4287863773",
                "337875583",
                "2231150714"
            ],
            "Class Item": [
                "3500810712",
                "2486733914",
                "4217390949"
            ]
        }
    }
}


export default function GraspLoot() {
    return <LootTable activity="Grasp of Avarice" href="chaosd2.com/grasp/loot" data={data} icon={BungieIcons.dungeons.goa} background={Background}/>
}