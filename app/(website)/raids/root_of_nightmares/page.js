import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons";

export const metadata = {
    "title": "Root of Nightmares",
}

export default function RootOfNightmares() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Root of Nightmares"} icon_url={BungieIcons.raids.ron}/>
            <p>Page Under Construction</p>
        </div>
    )
}