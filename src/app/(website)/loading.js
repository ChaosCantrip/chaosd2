import layout from "@styles/modules/layout.module.css";
import Title from "@components/Title";
import {BungieIcons} from "@components/BungieIcons";

export default function Loading() {
    return (
        <div className={layout.page}>
            <Title title="Loading..." show_back_button={false} icon_url={BungieIcons.ghost_icon}/>
        </div>
    )
}