import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Prophecy",
}

export default function ProphecyLayout({children}) {
    return <ActivityLayout title={"Prophecy"} icon_url={BungieIcons.dungeons.prophecy}>{children}</ActivityLayout>
}