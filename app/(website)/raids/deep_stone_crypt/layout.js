import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Deep Stone Crypt",
}

export default function DeepStoneLayout({children}) {
    return <ActivityLayout title={"Deep Stone Crypt"} icon_url={BungieIcons.raids.dsc}>{children}</ActivityLayout>
}