import LootTable from "@image_components/LootTable";
import {BungieIcons} from "@components/BungieIcons";
import Background from "@backgrounds/crotas_end.jpg";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const items = {
    "scout_rifle": "1432682459",
    "shotgun": "3163900678",
    "hand_cannon": "120706239",
    "auto_rifle": "833898322",
    "pulse_rifle": "1098171824",
    "machine_gun": "2828278545",
    "exotic": "1034055198",
}

const data = {
    encounters: [
        {
            name: "Enter the Abyss",
            "items": [
                items.scout_rifle,
                items.auto_rifle,
                items.machine_gun
            ],
            "armour": [
                "Chest",
                "Legs",
                "Class Item"
            ]
        },
        {
            name: "Cross the Bridge",
            "items": [
                items.shotgun,
                items.pulse_rifle,
                items.scout_rifle
            ],
            "armour": [
                "Arms",
                "Chest"
            ]
        },
        {
            name: "Ir Yût, the Deathsinger",
            "items": [
                items.pulse_rifle,
                items.machine_gun,
                items.hand_cannon
            ],
            "armour": [
                "Arms",
                "Chest"
            ]
        },
        {
            name: "Crota, Son of Oryx",
            "items": [
                items.hand_cannon,
                items.auto_rifle,
                items.shotgun
            ],
            "armour": [
                "Head",
                "Arms",
                "Class Item"
            ]
        }
    ],
    armour: {
        set: "God-Knight Suit Willbreaker Suit Deathsinger Suit",
        hashes: {
            "Head": [
                "1328334240",
                "859929450",
                "1964816829"
            ],
            "Arms": [
                "3189374833",
                "441033139",
                "427348780"
            ],
            "Chest": [
                "1261894567",
                "3714937821",
                "1386180724"
            ],
            "Legs": [
                "3020524483",
                "175883909",
                "1497538390"
            ],
            "Class Item": [
                "2401746614",
                "1306415888",
                "2130010697"
            ]
        }
    }
}

export default function CrotaLoot() {
    return <LootTable activity="Crota's End" href="chaosd2.com/crota/loot" data={data} icon={BungieIcons.raids.crotas_end} background={Background}/>
}