import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Vault of Glass"
}

export default function VaultLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.vog}>
            <ActivityLayout title={"Vault of Glass"} icon_url={BungieIcons.raids.vog}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}