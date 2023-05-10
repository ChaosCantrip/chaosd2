import LootTable from "@image_components/LootTable";
import {BungieIcons} from "@/src/lib/BungieIcons";
import Background from "@backgrounds/prophecy.jpg";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const data = {
    encounters: [
        {
            name: "Phalanx Echo",
            "items": [
                "1476654960",
                "3326850591"
            ],
            "armour": [
                "Legs",
                "Class Item"
            ]
        },
        {
            name: "Hexahedron",
            "items": [
                "507038823",
                "1626503676"
            ],
            "armour": [
                "Arms",
            ]
        },
        {
            name: "Kell Echo",
            "items": [
                "This Encounter only drops Armour",
            ],
            "armour": [
            ]
        },
        {
            name: "The Emissary",
            "items": [
                "2855157553",
                "2481758391",
                "Apparently this counts as an encounter lol"
            ],
            "armour": [
                "Head",
                "Chest",
                "Class Item"
            ]
        }
    ],
    armour: {
        set: "Moonfang-X7",
        hashes: {
            "Head": [
                "2234240008",
                "2623956730",
                "2288398391"
            ],
            "Arms": [
                "1581574297",
                "100226755",
                "1361912510"
            ],
            "Chest": [
                "1571337215",
                "4121885325",
                "1658294130"
            ],
            "Legs": [
                "178689419",
                "2487240821",
                "1781294872"
            ],
            "Class Item": [
                "3242850062",
                "2701727616",
                "2295111683"
            ]
        }
    }
}


export default function ProphecyLoot() {
    return <LootTable activity="Prophecy" href="chaosd2.com/prophecy/loot" data={data} icon={BungieIcons.dungeons.prophecy} background={Background}/>
}