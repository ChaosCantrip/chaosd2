import EncounterMap from "@/public/images/raids/deep_stone_crypt/loot.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Loot table for Deep Stone Crypt.",
    openGraph: {
        images: "/deep_stone_crypt/loot/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/deep_stone_crypt/loot"
            encounter_name="Loot Table"
            map={EncounterMap}
        />
    )
}