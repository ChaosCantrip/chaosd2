import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    title: "Duality",
    twitter: {
        card: "summary_large_image",
    }
}

export default function DualityLayout({ children }) {
    return (
        <BackgroundWrapper background={backgrounds.duality}>
            <ActivityLayout title={"Duality"} icon_url={BungieIcons.dungeons.duality}>{children}</ActivityLayout>
        </BackgroundWrapper>
    )
}