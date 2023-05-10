import {BungieIcons} from "@/src/lib/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@/src/styles/modules/layout.module.css";
import Background from "@backgrounds/grasp.jpg";

export const metadata = {
    title: "Duality",
    twitter: {
        card: "summary_large_image",
    }
}

export default function GraspLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Grasp of Avarice"} icon_url={BungieIcons.dungeons.goa}>
                {children}
            </ActivityLayout>
        </div>
    )
}