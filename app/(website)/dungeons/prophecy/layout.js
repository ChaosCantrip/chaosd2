import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    title: "Prophecy",
    twitter: {
        card: "summary_large_image",
    }
}

export default function ProphecyLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.prophecy}>
            <ActivityLayout title={"Prophecy"} icon_url={BungieIcons.dungeons.prophecy}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}