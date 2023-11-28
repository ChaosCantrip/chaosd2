import layout from "@styles/modules/layout.module.css";
import BackgroundImage from "@components/BackgroundImage";
import Background from "@backgrounds/raid.jpg";
import Title from "@components/Title";
import {BungieIcons} from "@components/BungieIcons";

export const metadata = {
    title: "Lost Sectors",
    description: `Infographics for Lost Sectors in Destiny 2.`,
    twitter: {
        card: 'summary',
        title: `Lost Sectors | chaosd2`,
        description: `Infographics for Lost Sectors in Destiny 2.`,
        creator: '@chaosd2dev'
    },
    openGraph: {
        title: `Lost Sectors | chaosd2`,
        description: `Infographics for Lost Sectors in Destiny 2.`,
    }
}

export default function LostSectorsPage() {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <div className={layout.page}>
                <Title title={"Lost Sectors"} icon_url={BungieIcons.lost_sectors_icon} show_back_button={false}/>
                <div className={layout.page_content}>
                    <p>Page Under Construction</p>
                </div>
            </div>
        </div>
    )
}