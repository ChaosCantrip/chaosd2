import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Grasp of Avarice",
}

export default function GraspLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.grasp}>
            <ActivityLayout title={"Grasp of Avarice"} icon_url={BungieIcons.dungeons.goa}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}