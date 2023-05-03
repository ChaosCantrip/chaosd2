
import EncounterMap from "@/public/images/dungeons/prophecy/loot.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Loot table for the Prophecy dungeon.",
    openGraph: {
        images: "/prophecy/loot/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/prophecy/loot"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}