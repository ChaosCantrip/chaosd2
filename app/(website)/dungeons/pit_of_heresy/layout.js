import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Pit of Heresy",
}

export default function PitLayout({children}) {
    return <ActivityLayout title={"Pit of Heresy"} icon_url={BungieIcons.dungeons.poh}>{children}</ActivityLayout>
}