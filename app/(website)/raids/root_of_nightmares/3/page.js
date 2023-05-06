import EncounterMap from "@/public/images/raids/root_of_nightmares/3.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Map for Encounter 3 of Root of Nightmares.",
    openGraph: {
        images: "/root_of_nightmares/3/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/root_of_nightmares/3"
            encounter_name="Macrocosm Map"
            map={EncounterMap}
        />
    )
}