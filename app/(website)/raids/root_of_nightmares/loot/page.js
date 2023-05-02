import EncounterMap from "@/public/images/raids/root_of_nightmares/loot.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Loot table for Root of Nightmares.",
    openGraph: {
        images: "/root_of_nightmares/loot/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/root_of_nightmares/loot"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}