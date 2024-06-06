import LostSector from "@image_components/LostSector";

const data = {
    "Background": "https://www.bungie.net/img/destiny_content/pgcr/barrens.jpg",
    "Legend": {
        "Modifiers": [
            "Legend Modifiers",
            4226469317,
            95459596,
            1598472557,
            998275325
        ],
        "Champions": [
            "Overload",
            "Unstoppable"
        ],
        "Shields": [
            "Arc",
            "Solar",
            "Void"
        ],
        "Surges": [
            "Arc",
            "Solar",
            "Void"
        ]
    },
    "Master": {
        "Modifiers": [
            "Master Modifiers",
            4226469317,
            95459596,
            1598472557,
            998275325,
            3101164718
        ],
        "Champions": [
            "Overload",
            "Unstoppable"
        ],
        "Shields": [
            "Arc",
            "Solar",
            "Void"
        ],
        "Surges": [
            "Arc",
            "Solar",
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
    return <LostSector name={"The Broken Deep"} location={"The Impasse, The Pale Heart"} background={data.Background} href={"chaosd2.com/ls/the_broken_deep"} data={data}/>
}