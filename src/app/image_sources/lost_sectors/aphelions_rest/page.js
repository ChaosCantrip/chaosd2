import LostSector from "@image_components/LostSector";

const data = {
    "Background": "https://www.bungie.net/img/destiny_content/pgcr/dreaming_city_aphelions_rest.jpg",
    "Legend": {
        "Modifiers": [
            "Legend Modifiers",
            4226469317,
            3132780533,
            3517267764,
            838742970,
            998275325
        ],
        "Champions": [
            "Unstoppable",
            "Overload"
        ],
        "Shields": [
            "Void"
        ],
        "Surges": [
            "Solar",
            "Void",
            "Strand",
            "Arc"
        ]
    },
    "Master": {
        "Modifiers": [
            "Master Modifiers",
            4226469317,
            3132780533,
            3517267764,
            838742970,
            998275325,
            3346897368
        ],
        "Champions": [
            "Unstoppable",
            "Overload"
        ],
        "Shields": [
            "Void"
        ],
        "Surges": [
            "Solar",
            "Void",
            "Strand",
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
    return <LostSector name={"Aphelion's Rest"} location={"The Strand, Dreaming City"} background={data.Background} href={"chaosd2.com/ls/aphelions_rest"} data={data}/>
}