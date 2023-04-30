import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons"

export default function GardenOfSalvation() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Garden of Salvation"} icon_url={BungieIcons.raids.gos}/>
            <p>Page Under Construction</p>
        </div>
    )
}