import EncounterMap from "@/public/images/dungeons/spire_of_the_watcher/loot.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Loot table for the Spire of the Watcher.",
    openGraph: {
        images: "/spire_of_the_watcher/loot/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/spire_of_the_watcher/loot/i"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}