import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Deep Stone Crypt",
}

export default function DeepStoneLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.dsc}>
            <ActivityLayout title={"Deep Stone Crypt"} icon_url={BungieIcons.raids.dsc}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}