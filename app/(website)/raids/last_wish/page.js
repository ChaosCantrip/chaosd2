import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function LastWish() {
    return (
        <div className={layout.page}>
            <Title title={"Last Wish"} icon_url={BungieIcons.raids.lw}/>
            <p>Page Under Construction</p>
        </div>
    )
}