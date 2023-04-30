import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function VaultOfGlass() {
    return (
        <div className={layout.page}>
            <Title title={"Vault of Glass"} icon_url={BungieIcons.raids.vog}/>
            <p>Page Under Construction</p>
        </div>
    )
}