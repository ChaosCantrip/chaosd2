import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Grasp of Avarice",
}

export default function GraspLayout({children}) {
    return <ActivityLayout title={"Grasp of Avarice"} icon_url={BungieIcons.dungeons.goa}>{children}</ActivityLayout>
}