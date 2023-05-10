import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundImage from "@/lib/components/BackgroundImage";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/vow.jpg";

export const metadata = {
    "title": "Vow of the Disciple",
    twitter: {
        card: "summary_large_image",
    }
}

export default function VowLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Vow of the Disciple"} icon_url={BungieIcons.raids.votd}>
                {children}
            </ActivityLayout>
        </div>
    )
}