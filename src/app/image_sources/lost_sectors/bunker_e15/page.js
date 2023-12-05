import LostSector from "@image_components/LostSector";

const data = {
    "Background": "https://www.bungie.net/img/destiny_content/pgcr/europa-lost-sector-overhang.jpg",
    "Legend": {
        "Modifiers": [
            "Legend Modifiers",
            4226469317,
            3758645512,
            3652821947,
            321244196
        ],
        "Champions": [
            "Overload",
            "Barrier"
        ],
        "Shields": [
            "Void"
        ],
        "Surges": [
            "Strand",
            "Solar",
            "Arc",
            "Void"
        ]
    },
    "Master": {
        "Modifiers": [
            "Master Modifiers",
            4226469317,
            3758645512,
            3652821947,
            321244196,
            3346897368
        ],
        "Champions": [
            "Overload",
            "Barrier"
        ],
        "Shields": [
            "Void"
        ],
        "Surges": [
            "Strand",
            "Solar",
            "Arc",
            "Void"
        ]
    }
}

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function LostSectorTest() {
    return <LostSector name={"Bunker E15"} location={"Eventide Ruins, Europa"} background={data.Background} href={"chaosd2.com/ls/bunker_e15"} data={data}/>
}