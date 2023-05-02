
import EncounterMap from "@/public/images/dungeons/duality/loot.png";
import EncounterPage from "@/lib/components/EncounterPage";

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/duality/loot/i"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}