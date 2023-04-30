import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons"

export default function SpireOfTheWatcher() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Spire of the Watcher"} icon_url={BungieIcons.dungeons.sotw}/>
            <p>Page Under Construction</p>
        </div>
    )
}