import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Garden of Salvation",
}

export default function GardenLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.garden}>
            <ActivityLayout title={"Garden of Salvation"} icon_url={BungieIcons.raids.gos}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}