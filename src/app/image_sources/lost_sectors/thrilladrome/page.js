import LostSector from "@image_components/LostSector";

const data = {
    "Background": "https://www.bungie.net/img/destiny_content/pgcr/neomuna_lost_sector_thrilladrome.jpg",
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
            "Void",
            "Arc"
        ],
        "Surges": [
            "Strand",
            "Solar",
            "Void",
            "Arc"
        ]
    },
    "Master": {
        "Modifiers": [
            "Master Modifiers",
            4226469317,
            3758645512,
            3652821947,
            321244196,
            3101164718
        ],
        "Champions": [
            "Overload",
            "Barrier"
        ],
        "Shields": [
            "Void",
            "Arc"
        ],
        "Surges": [
            "Strand",
            "Solar",
            "Void",
            "Arc"
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
    return <LostSector name={"Thrilladrome"} location={"Liming Harbor, Neptune"} background={data.Background} href={"chaosd2.com/ls/thrilladrome"} data={data}/>
}