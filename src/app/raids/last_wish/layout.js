import {BungieIcons} from "@components/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@src/styles/modules/layout.module.css";
import Background from "@backgrounds/last_wish.jpg";

export const metadata = {
    "title": "Last Wish"
}

export default function LastWishLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Last Wish"} icon_url={BungieIcons.raids.lw}>
                {children}
            </ActivityLayout>
        </div>
    )
}