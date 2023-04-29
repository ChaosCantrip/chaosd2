import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Vault of Glass",
}

export default function VaultOfGlass() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Vault of Glass"}/>
            <p>Page Under Construction</p>
        </div>
    )
}