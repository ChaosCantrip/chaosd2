import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons"

export default function Prophecy() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Prophecy"} icon_url={BungieIcons.dungeons.prophecy}/>
            <p>Page Under Construction</p>
        </div>
    )
}