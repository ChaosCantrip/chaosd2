import {BungieIcons} from "@components/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@src/styles/modules/layout.module.css";
import Background from "@backgrounds/dsc.jpg";

export const metadata = {
    "title": "Deep Stone Crypt",
    twitter: {
        card: "summary_large_image",
    }
}

export default function DeepStoneLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Deep Stone Crypt"} icon_url={BungieIcons.raids.dsc}>
                {children}
            </ActivityLayout>
        </div>
    )
}