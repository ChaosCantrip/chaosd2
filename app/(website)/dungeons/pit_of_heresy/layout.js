import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundImage from "@/lib/components/BackgroundImage";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/pit.jpg";

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