import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function GardenOfSalvation() {
    return (
        <div className={layout.page}>
            <Title title={"Garden of Salvation"} icon_url={BungieIcons.raids.gos}/>
            <p>Page Under Construction</p>
        </div>
    )
}