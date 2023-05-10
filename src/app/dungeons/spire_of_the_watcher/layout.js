import {BungieIcons} from "@/src/lib/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@/src/styles/modules/layout.module.css";
import Background from "@backgrounds/spire.jpg";

export const metadata = {
    "title": "Spire of the Watcher",
    twitter: {
        card: "summary_large_image",
    }
}

export default function SpireLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Spire of the Watcher"} icon_url={BungieIcons.dungeons.sotw}>
                {children}
            </ActivityLayout>
        </div>
    )
}