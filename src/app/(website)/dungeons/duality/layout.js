import {BungieIcons} from "@components/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@styles/modules/layout.module.css";
import Background from "@backgrounds/duality.jpg";

export const metadata = {
    title: "Duality",
    twitter: {
        card: "summary_large_image",
    }
}

export default function DualityLayout({ children }) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Duality"} icon_url={BungieIcons.dungeons.duality}>{children}</ActivityLayout>
        </div>
    )
}