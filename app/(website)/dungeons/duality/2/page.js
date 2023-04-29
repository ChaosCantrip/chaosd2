import EncounterMap from "@/public/images/dungeons/duality/2.png";
import EncounterPage from "@/lib/components/EncounterPage";

export default function Encounter2() {
    return (
        <EncounterPage
            image_ql="/duality/2/i"
            activity_name="Duality"
            encounter_name="Encounter 2 - Vault"
            map={EncounterMap}
        />
    )
}