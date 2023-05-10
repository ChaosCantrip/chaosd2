import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundImage from "@/lib/components/BackgroundImage";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/prophecy.jpg";

export const metadata = {
    title: "Prophecy",
    twitter: {
        card: "summary_large_image",
    }
}

export default function ProphecyLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Prophecy"} icon_url={BungieIcons.dungeons.prophecy}>
                {children}
            </ActivityLayout>
        </div>
    )
}