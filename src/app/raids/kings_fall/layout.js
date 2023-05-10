import {BungieIcons} from "@components/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@src/styles/modules/layout.module.css";
import Background from "@backgrounds/kf.jpg";

export const metadata = {
    "title": "King's Fall",
    twitter: {
        card: "summary_large_image",
    }
}

export default function KingsFallLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"King's Fall"} icon_url={BungieIcons.raids.kf}>
                {children}
            </ActivityLayout>
        </div>
    )
}