import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Pit of Heresy",
}

export default function PitLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.pit}>
            <ActivityLayout title={"Pit of Heresy"} icon_url={BungieIcons.raids.poh}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}