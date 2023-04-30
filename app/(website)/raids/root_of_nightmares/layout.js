import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Root of Nightmares"
}

export default function RootLayout({children}) {
    return <ActivityLayout title={"Root of Nightmares"} icon_url={BungieIcons.raids.ron}>{children}</ActivityLayout>
}