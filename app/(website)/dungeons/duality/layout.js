import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundImage from "@/lib/components/BackgroundImage";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/duality.jpg";

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