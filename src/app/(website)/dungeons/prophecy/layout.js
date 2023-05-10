import {BungieIcons} from "@components/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@styles/modules/layout.module.css";
import Background from "@backgrounds/prophecy.jpg";

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