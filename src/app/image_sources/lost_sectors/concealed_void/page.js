import LostSector from "@image_components/LostSector";

/* TODO: This is a placeholder page. */

const data = {
    "Background": "https://www.bungie.net/img/destiny_content/pgcr/europa-lost-sector-frost.jpg",
    "Legend": {
        "Modifiers": [
            "Legend Modifiers",
            4226469317,
            2178457119,
            3517267764,
            3021161702
        ],
        "Champions": [
            "Barrier",
            "Overload"
        ],
        "Shields": [
            "Solar",
            "Void"
        ],
        "Surges": [
            "Arc",
            "Solar",
            "Void",
            "Strand"
        ]
    },
    "Master": {
        "Modifiers": [
            "Master Modifiers",
            4226469317,
            2178457119,
            3517267764,
            3021161702,
            3101164718,
        ],
        "Champions": [
            "Barrier",
            "Overload"
        ],
        "Shields": [
            "Solar",
            "Void"
        ],
        "Surges": [
            "Arc",
            "Solar",
            "Void",
            "Strand"
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
    return <LostSector name={"Concealed Void"} location={"Asterion Abyss, Europa"} background={data.Background} href={"chaosd2.com/ls/concealed_void"} data={data}/>
}