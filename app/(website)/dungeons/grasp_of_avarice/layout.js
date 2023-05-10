import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";
import BackgroundImage from "@/lib/components/BackgroundImage";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/grasp.jpg";

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