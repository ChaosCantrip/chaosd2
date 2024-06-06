import LostSector from "@image_components/LostSector";

const data = {
    "Background": "https://www.bungie.net/img/destiny_content/pgcr/shire.jpg",
    "Legend": {
        "Modifiers": [
            "Legend Modifiers",
            4226469317,
            3758645512,
            186409259,
            2139004924
        ],
        "Champions": [
            "Barrier",
            "Unstoppable"
        ],
        "Shields": [
            "Arc",
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
            3758645512,
            186409259,
            2139004924,
            3101164718
        ],
        "Champions": [
            "Barrier",
            "Unstoppable"
        ],
        "Shields": [
            "Arc",
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
    return <LostSector name={"The Forgotten Deep"} location={"The Landing, The Pale Heart"} background={data.Background} href={"chaosd2.com/ls/the_forgotten_deep"} data={data}/>
}