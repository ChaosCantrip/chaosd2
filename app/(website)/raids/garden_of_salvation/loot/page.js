import EncounterMap from "@images/raids/garden_of_salvation/loot.png";
import EncounterPage from "@components/EncounterPage";

export const metadata = {
    description: "Loot table for Garden of Salvation.",
    openGraph: {
        images: "/garden_of_salvation/loot/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/garden/loot"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}