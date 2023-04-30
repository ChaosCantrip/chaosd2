import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "King's Fall",
}

export default function KingsFallLayout({children}) {
    return <ActivityLayout title={"King's Fall"} icon_url={BungieIcons.raids.kf}>{children}</ActivityLayout>
}