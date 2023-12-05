import LostSector from "@image_components/LostSector";

/* TODO: This is a placeholder page. */

const data = {
    "Background": "https://www.bungie.net/img/destiny_content/pgcr/europa-lost-sector-shear.jpg",
    "Legend": {
        "Modifiers": [
            "Legend Modifiers",
            4226469317,
            2626834038,
            186409259,
            321244196
        ],
        "Champions": [
            "Barrier",
            "Overload"
        ],
        "Shields": [
            "Arc",
            "Void"
        ],
        "Surges": [
            "Arc",
            "Solar",
            "Strand",
            "Void"
        ]
    },
    "Master": {
        "Modifiers": [
            "Master Modifiers",
            4226469317,
            2626834038,
            186409259,
            321244196,
            965929096
        ],
        "Champions": [
            "Barrier",
            "Overload"
        ],
        "Shields": [
            "Arc",
            "Void"
        ],
        "Surges": [
            "Arc",
            "Solar",
            "Strand",
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
    return <LostSector name={"Perdition"} location={"Cadmus Ridge, Europa"} background={data.Background} href={"chaosd2.com/ls/perdition"} data={data}/>
}