import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function PitOfHeresy() {
    return (
        <div className={layout.page}>
            <Title title={"Pit of Heresy"} icon_url={BungieIcons.dungeons.poh}/>
            <p>Page Under Construction</p>
        </div>
    )
}