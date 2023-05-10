import {BungieIcons} from "@components/BungieIcons";
import ActivityLayout from "@components/ActivityLayout";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@styles/modules/layout.module.css";
import Background from "@backgrounds/vog.jpg";

export const metadata = {
    "title": "Vault of Glass"
}

export default function VaultLayout({children}) {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <ActivityLayout title={"Vault of Glass"} icon_url={BungieIcons.raids.vog}>
                {children}
            </ActivityLayout>
        </div>
    )
}