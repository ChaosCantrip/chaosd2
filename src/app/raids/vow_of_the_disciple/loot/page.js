import EncounterMap from "@images/raids/vow_of_the_disciple/loot.png";
import EncounterPage from "@components/EncounterPage";

export const metadata = {
    description: "Loot table for Vow of the Disciple.",
    openGraph: {
        images: "/vow_of_the_disciple/loot/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/vow/loot"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}