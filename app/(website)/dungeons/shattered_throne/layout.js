import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Spire of the Watcher",
}

export default function ThroneLayout({children}) {
    return <ActivityLayout title={"Shattered Throne"} icon_url={BungieIcons.dungeons.st}>{children}</ActivityLayout>
}