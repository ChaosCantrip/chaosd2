import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function Prophecy() {
    return (
        <div className={layout.page}>
            <Title title={"Prophecy"} icon_url={BungieIcons.dungeons.prophecy}/>
            <p>Page Under Construction</p>
        </div>
    )
}