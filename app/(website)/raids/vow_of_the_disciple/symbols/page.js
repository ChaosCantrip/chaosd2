import SymbolsTable from "@/public/images/raids/vow_of_the_disciple/symbols.png";
import EncounterPage from "@/lib/components/EncounterPage";

export const metadata = {
    description: "Symbols table for Vow of the Disciple.",
    openGraph: {
        images: "/vow_of_the_disciple/symbols/i"
    }
}

export default function LootPage() {
    return (
        <EncounterPage
            image_ql="/vow/symbols"
            encounter_name="Symbols Table"
            map={SymbolsTable}
        />
    )
}