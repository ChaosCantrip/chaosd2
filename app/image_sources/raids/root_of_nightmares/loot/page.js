import LootTable from "@/lib/image_components/LootTable";
import {BungieIcons} from "@/lib/BungieIcons";
import Background from "@/public/images/backgrounds/root.jpg";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const data = {
    encounters: [
        {
            name: "Cataclysm",
            "items": [
                "135029084",
                "2972949637",
                "1491665733"
            ],
            "armour": [
                "Head",
                "Arms",
                "Chest",
            ]
        },
        {
            name: "Scission",
            "items": [
                "231031173",
                "135029084",
                "1471212226",
                "2972949637"
            ],
            "armour": [
                "Arms",
                "Chest",
                "Legs"
            ]
        },
        {
            name: "Macrocosm",
            "items": [
                "484515708",
                "231031173",
                "1471212226",
                "2972949637"
            ],
            "armour": [
                "Chest",
                "Legs",
                "Class Item"
            ]
        },
        {
            name: "Nezarec, Final God of Pain",
            "items": [
                "3371017761",
                "any"
            ],
            "armour": [
                "Head",
                "Legs",
                "Class Item",
            ]
        }
    ],
    armour: {
        set: "Bug Lookin' Armour",
        hashes: {
            "Head": [
                "3475635982",
                "3810243376",
                "4123705451"
            ],
            "Arms": [
                "630432767",
                "3608027009",
                "2445962586"
            ],
            "Chest": [
                "824228793",
                "2787963735",
                "2597227950"
            ],
            "Legs": [
                "3846650177",
                "807905267",
                "3702434452"
            ],
            "Class Item": [
                "2138394740",
                "621315878",
                "2915322487"
            ]
        }
    }
}


export default function RootLoot() {
    return <LootTable activity="Root of Nightmares" href="chaosd2.com/root/loot" data={data} icon={BungieIcons.raids.ron} background={Background}/>
}