import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons";

export const metadata = {
    "title": "Vault of Glass",
}

export default function VaultOfGlass() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Vault of Glass"} icon_url={BungieIcons.raids.vog}/>
            <p>Page Under Construction</p>
        </div>
    )
}