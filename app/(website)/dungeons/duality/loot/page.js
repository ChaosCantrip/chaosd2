
import EncounterMap from "@/public/images/dungeons/duality/loot.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Loot table for the Duality raid.",
    openGraph: {
        images: "/duality/loot/i"
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