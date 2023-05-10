import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/root.jpg";
import BackgroundImage from "@/lib/components/BackgroundImage";

export const metadata = {
    "title": "Root of Nightmares",
    twitter: {
        card: "summary_large_image",
    }
}

export default function RootLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Root of Nightmares"} icon_url={BungieIcons.raids.root}>
                {children}
            </ActivityLayout>
        </div>
    )
}