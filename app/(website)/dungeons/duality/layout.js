import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Duality",
}

export default function DualityLayout({ children }) {
    return <ActivityLayout title={"Duality"} icon_url={BungieIcons.dungeons.duality}>{children}</ActivityLayout>
}