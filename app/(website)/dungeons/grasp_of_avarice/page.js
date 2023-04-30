import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function GraspOfAvarice() {
    return (
        <div className={layout.page}>
            <Title title={"Grasp of Avarice"} icon_url={BungieIcons.dungeons.goa}/>
            <p>Page Under Construction</p>
        </div>
    )
}