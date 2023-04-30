import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "King's Fall",
}

export default function KingsFallLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.kf}>
            <ActivityLayout title={"King's Fall"} icon_url={BungieIcons.raids.kf}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}