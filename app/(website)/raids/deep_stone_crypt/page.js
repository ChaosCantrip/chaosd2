import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function DeepStoneCrypt() {
    return (
        <div className={layout.page}>
            <Title title={"Deep Stone Crypt"} icon_url={BungieIcons.raids.dsc}/>
            <p>Page Under Construction</p>
        </div>
    )
}