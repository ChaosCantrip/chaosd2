import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons";

export const metadata = {
    "title": "King's Fall",
}

export default function KingsFall() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"King's Fall"} icon_url={BungieIcons.raids.kf}/>
            <p>Page Under Construction</p>
        </div>
    )
}