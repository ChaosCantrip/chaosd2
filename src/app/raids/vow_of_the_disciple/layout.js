import {BungieIcons} from "@/src/lib/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@/src/styles/modules/layout.module.css";
import Background from "@backgrounds/vow.jpg";

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