import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";
import {BungieIcons} from "@/lib/BungieIcons";

export const metadata = {
    "title": "Deep Stone Crypt",
}

export default function DeepStoneCrypt() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Deep Stone Crypt"} icon_url={BungieIcons.raids.dsc}/>
            <p>Page Under Construction</p>
        </div>
    )
}