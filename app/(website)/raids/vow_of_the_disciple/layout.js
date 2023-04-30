import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Vow of the Disciple"
}

export default function VowLayout({children}) {
    return <ActivityLayout title={"Vow of the Disciple"} icon_url={BungieIcons.raids.votd}>{children}</ActivityLayout>
}