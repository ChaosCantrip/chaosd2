import EncounterMap from "@/public/images/dungeons/duality/2.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Encounter 2 - Vault",
}
export default function Encounter2() {
    return (
        <EncounterPage
            image_ql="/duality/2/i"
            encounter_name="Encounter 2 - Vault"
            map={EncounterMap}
        />
    )
}