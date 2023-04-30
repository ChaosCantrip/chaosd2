import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function SpireOfTheWatcher() {
    return (
        <div className={layout.page}>
            <Title title={"Spire of the Watcher"} icon_url={BungieIcons.dungeons.sotw}/>
            <p>Page Under Construction</p>
        </div>
    )
}