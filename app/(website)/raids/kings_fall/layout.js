import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundImage from "@/lib/components/BackgroundImage";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/kf.jpg";

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