import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Last Wish"
}

export default function LastWishLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.last_wish}>
            <ActivityLayout title={"Last Wish"} icon_url={BungieIcons.raids.lw}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}