import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons"

export default function GraspOfAvarice() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Grasp of Avarice"} icon_url={BungieIcons.dungeons.goa}/>
            <p>Page Under Construction</p>
        </div>
    )
}