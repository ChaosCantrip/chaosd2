
import EncounterMap from "@/public/images/dungeons/duality/loot.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    name: "Duality Loot Table | chaosd2",
    description: "Loot table for the Duality raid.",
    twitter: {
        card: "summary_large_image",
    }
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