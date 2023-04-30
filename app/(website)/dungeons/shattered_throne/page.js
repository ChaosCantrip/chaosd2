import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function ShatteredThrone() {
    return (
        <div className={layout.page}>
            <Title title={"Shattered Throne"} icon_url={BungieIcons.dungeons.st}/>
            <p>Page Under Construction</p>
        </div>
    )
}