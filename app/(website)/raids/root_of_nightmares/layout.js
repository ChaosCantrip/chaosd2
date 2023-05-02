import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Root of Nightmares",
    twitter: {
        card: "summary_large_image",
    }
}

export default function RootLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.root}>
            <ActivityLayout title={"Root of Nightmares"} icon_url={BungieIcons.raids.root}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}