import LootTable from "@/lib/image_components/LootTable";
import {BungieIcons} from "@/lib/BungieIcons";
import Background from "@/public/images/backgrounds/root.jpg";

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
                "Helmet",
                "Gauntlets",
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
                "Gauntlets",
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
                "Helmet",
                "Legs",
                "Class Item",
            ]
        }
    ],
    armour: {
        set: "Bug Lookin' Armour",
        hashes: {
            "Helmet": [
                "3475635982",
                "3810243376",
                "4123705451"
            ],
            "Gauntlets": [
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


export default function DSCLoot() {
    return <LootTable activity="Root of Nightmares" href="chaosd2.com/root/loot" data={data} icon={BungieIcons.raids.ron} background={Background}/>
}