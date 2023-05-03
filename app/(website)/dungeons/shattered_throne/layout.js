import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Shattered Throne",
}

export default function ThroneLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.st}>
            <ActivityLayout title={"Shattered Throne"} icon_url={BungieIcons.dungeons.st}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}