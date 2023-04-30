import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons";

export const metadata = {
    "title": "Pit of Heresy",
}

export default function PitOfHeresy() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Pit of Heresy"} icon_url={BungieIcons.dungeons.poh}/>
            <p>Page Under Construction</p>
        </div>
    )
}