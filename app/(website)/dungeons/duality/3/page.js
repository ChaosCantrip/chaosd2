import EncounterMap from "@/public/images/dungeons/duality/3.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Encounter 3 - Nightmare of Caiatl"
}

export default function Encounter3() {
    return (
        <EncounterPage
            image_ql="/duality/3/i"
            encounter_name="Encounter 3 - Nightmare of Caiatl"
            map={EncounterMap}
        />
    )
}