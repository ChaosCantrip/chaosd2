import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Garden of Salvation",
}

export default function GardenLayout({children}) {
    return <ActivityLayout title={"Garden of Salvation"} icon_url={BungieIcons.raids.gos}>{children}</ActivityLayout>
}