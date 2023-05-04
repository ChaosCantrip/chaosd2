import Image from "@/public/images/raids/kings_fall/rb.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Red Border Key for King's Fall.",
    openGraph: {
        images: "/kings_fall/rb/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/kf/rb"
            encounter_name="Loot Table"
            map={Image}
        />
    )
}