import EncounterMap from "@images/dungeons/grasp_of_avarice/loot.png";
import EncounterPage from "@components/EncounterPage";

export const metadata = {
    description: "Loot table for the Grasp of Avarice.",
    openGraph: {
        images: "/grasp_of_avarice/loot/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/grasp_of_avarice/loot"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}