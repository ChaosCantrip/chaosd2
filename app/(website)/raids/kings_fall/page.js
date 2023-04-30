import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons";

export default function KingsFall() {
    return (
        <div className={layout.page}>
            <Title title={"King's Fall"} icon_url={BungieIcons.raids.kf}/>
            <p>Page Under Construction</p>
        </div>
    )
}