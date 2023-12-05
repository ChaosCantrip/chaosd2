import LostSector from "@image_components/LostSector";

/* TODO: This is a placeholder page. */

const data = {
    "Background": "https://www.bungie.net/img/destiny_content/pgcr/dreaming_city_chamber_of_starlight.jpg",
    "Legend": {
        "Modifiers": [
            "Legend Modifiers",
            4226469317,
            1326581064,
            3517267764,
            998275325,
        ],
        "Champions": [
            "Overload",
            "Unstoppable"
        ],
        "Shields": [
            "Void",
            "Solar"
        ],
        "Surges": [
            "Void",
            "Solar",
            "Strand",
            "Arc"
        ]
    },
    "Master": {
        "Modifiers": [
            "Master Modifiers",
            4226469317,
            1326581064,
            3517267764,
            998275325,
            3346897368
        ],
        "Champions": [
            "Overload",
            "Unstoppable"
        ],
        "Shields": [
            "Void",
            "Solar"
        ],
        "Surges": [
            "Void",
            "Solar",
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
    return <LostSector name={"Chamber of Starlight"} location={"Rheasilvia, Dreaming City"} background={data.Background} href={"chaosd2.com/ls/chamber_of_starlight"} data={data}/>
}