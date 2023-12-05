import LostSector from "@image_components/LostSector";

const data = {
    "Background": "https://www.bungie.net/img/destiny_content/pgcr/dreaming_city_bay_of_drowned_wishes.jpg",
    "Legend": {
        "Modifiers": [
            "Legend Modifiers",
            4226469317,
            1282934989,
            186409259,
            3566681029
        ],
        "Champions": [
            "Overload",
            "Unstoppable"
        ],
        "Shields": [
            "Void"
        ],
        "Surges": [
            "Solar",
            "Arc",
            "Strand",
            "Void"
        ]
    },
    "Master": {
        "Modifiers": [
            "Master Modifiers",
            4226469317,
            1282934989,
            186409259,
            3566681029,
            3101164718
        ],
        "Champions": [
            "Overload",
            "Unstoppable"
        ],
        "Shields": [
            "Void"
        ],
        "Surges": [
            "Solar",
            "Arc",
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
    return <LostSector name={"Exodus Garden 2A"} location={"Divalian Mists, Dreaming City"} background={data.Background} href={"chaosd2.com/ls/bay_of_drowned_wishes"} data={data}/>
}