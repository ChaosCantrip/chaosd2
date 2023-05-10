import {BungieIcons} from "@lib/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@styles/modules/layout.module.css";
import Background from "@backgrounds/pit.jpg";

export const metadata = {
    "title": "Pit of Heresy",
}

export default function PitLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Pit of Heresy"} icon_url={BungieIcons.raids.poh}>
                {children}
            </ActivityLayout>
        </div>
    )
}