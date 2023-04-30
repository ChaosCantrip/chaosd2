import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "Vault of Glass"
}

export default function VaultLayout({children}) {
    return <ActivityLayout title={"Vault of Glass"} icon_url={BungieIcons.raids.vog}>{children}</ActivityLayout>
}