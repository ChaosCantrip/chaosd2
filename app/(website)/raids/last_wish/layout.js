import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Last Wish"
}

export default function LastWishLayout({children}) {
    return <ActivityLayout title={"Last Wish"} icon_url={BungieIcons.raids.lw}>{children}</ActivityLayout>
}