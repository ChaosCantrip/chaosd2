import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons"

export default function ShatteredThrone() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Shattered Throne"} icon_url={BungieIcons.dungeons.st}/>
            <p>Page Under Construction</p>
        </div>
    )
}