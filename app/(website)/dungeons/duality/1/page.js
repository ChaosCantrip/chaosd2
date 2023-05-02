
import EncounterMap from "@/public/images/dungeons/duality/1.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Encounter 1 - Nightmare of Galhran",
    openGraph: {
        images: "/duality/1/i"
    }
}

export default function Encounter1() {
    return (
        <EncounterPage
            image_ql="/duality/1/i"
            encounter_name="Encounter 1 - Nightmare of Galhran"
            map={EncounterMap}
        />
    )
}