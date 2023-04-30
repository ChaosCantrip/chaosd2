import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function RootOfNightmares() {
    return (
        <div className={layout.page}>
            <Title title={"Root of Nightmares"} icon_url={BungieIcons.raids.ron}/>
            <p>Page Under Construction</p>
        </div>
    )
}