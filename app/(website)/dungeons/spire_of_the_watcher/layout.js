import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Spire of the Watcher",
}

export default function SpireLayout({children}) {
    return <ActivityLayout title={"Spire of the Watcher"}
                           icon_url={BungieIcons.dungeons.sotw}>{children}</ActivityLayout>
}