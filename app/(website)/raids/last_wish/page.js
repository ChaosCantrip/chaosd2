import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons";

export const metadata = {
    "title": "Last Wish",
}

export default function LastWish() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Last Wish"} icon_url={BungieIcons.raids.lw}/>
            <p>Page Under Construction</p>
        </div>
    )
}