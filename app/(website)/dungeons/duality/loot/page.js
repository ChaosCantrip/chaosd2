
import EncounterMap from "@/public/images/dungeons/duality/loot.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    title: "Duality Loot Table | chaosd2",
    description: "Loot table for the Duality raid."
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/duality/loot/i"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}