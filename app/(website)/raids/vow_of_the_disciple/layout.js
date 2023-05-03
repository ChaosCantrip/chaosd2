import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";

export const metadata = {
    "title": "Vow of the Disciple",
    twitter: {
        card: "summary_large_image",
    }
}

export default function VowLayout({children}) {
    return (
        <BackgroundWrapper background={backgrounds.vow}>
            <ActivityLayout title={"Vow of the Disciple"} icon_url={BungieIcons.raids.votd}>
                {children}
            </ActivityLayout>
        </BackgroundWrapper>
    )
}