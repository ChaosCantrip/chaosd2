import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundImage from "@/lib/components/BackgroundImage";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/garden.jpg";

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