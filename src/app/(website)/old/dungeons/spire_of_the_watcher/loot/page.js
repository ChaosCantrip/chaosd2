import EncounterMap from "@images/dungeons/spire_of_the_watcher/loot.png";
import EncounterPage from "@components/EncounterPage";

export const metadata = {
    description: "Loot table for the Spire of the Watcher.",
    openGraph: {
        images: "/spire_of_the_watcher/loot/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/spire/loot"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}