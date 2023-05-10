import {BungieIcons} from "@components/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@styles/modules/layout.module.css";
import Background from "@backgrounds/garden.jpg";

export const metadata = {
    "title": "Garden of Salvation",
    twitter: {
        card: "summary_large_image",
    }
}

export default function GardenLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Garden of Salvation"} icon_url={BungieIcons.raids.gos}>
                {children}
            </ActivityLayout>
        </div>
    )
}