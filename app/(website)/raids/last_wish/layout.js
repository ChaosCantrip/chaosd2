import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundImage from "@/lib/components/BackgroundImage";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/last_wish.jpg";

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