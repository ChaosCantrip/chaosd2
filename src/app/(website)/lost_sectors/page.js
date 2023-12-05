import layout from "@styles/modules/layout.module.css";
import BackgroundImage from "@components/BackgroundImage";
import Background from "@backgrounds/home.jpg";
import Title from "@components/Title";
import {BungieIcons} from "@components/BungieIcons";
import Image from "next/image";
import Dropdown from "@components/Dropdown";
import custom from "@src/app/(website)/[rad]/[activity]/custom.module.css";
import QuickLink from "@components/QuickLink";
import Link from "next/link";
import {image_sources} from "@components/ImageImports";
import {PathConfig} from "@components/PathConfig";

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
                    {Object.keys(PathConfig.lost_sectors).map((lost_sector_id) => {
                        const lost_sector = PathConfig.lost_sectors[lost_sector_id];
                        return (
                            <Dropdown title={`${lost_sector.name}, ${lost_sector.location}`} href={lost_sector.ql} key={lost_sector_id} done={true}>
                                <div className={custom.dropdown_content}>
                                    <QuickLink href={lost_sector.ql}/>
                                    <div className={custom.dropdown_image_wrapper}>
                                        <Link href={`${lost_sector.ql}/i`} className={custom.image_link}>
                                            <Image src={image_sources.lost_sectors[lost_sector_id]} alt={<a href={lost_sector.ql}>{lost_sector.name}</a>} className={custom.dropdown_image} placeholder="blur"/>
                                        </Link>
                                    </div>
                                </div>
                            </Dropdown>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}