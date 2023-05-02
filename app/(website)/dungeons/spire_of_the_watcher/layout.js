import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Spire of the Watcher",
    twitter: {
        card: "summary_large_image",
    }
}

export default function SpireLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.spire}>
            <ActivityLayout title={"Spire of the Watcher"} icon_url={BungieIcons.dungeons.sotw}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}