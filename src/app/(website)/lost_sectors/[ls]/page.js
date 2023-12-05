import layout from "@styles/modules/layout.module.css";
import Image from "next/image";
import QuickLink from "@components/QuickLink";
import Link from "next/link";
import {PathConfig} from "@components/PathConfig";
import {backgrounds, image_sources} from "@components/ImageImports";
import Title from "@components/Title";
import {BungieIcons} from "@components/BungieIcons";
import custom from "../../[rad]/[activity]/[encounter]/custom.module.css";
import BackgroundImage from "@components/BackgroundImage";

export const dynamicParams = false;

export async function generateStaticParams() {
    const params = [];
    Object.keys(PathConfig.lost_sectors).forEach((lost_sector_id) => {
        params.push({
            ls: lost_sector_id,
        });
    });
    return params;
}

export async function generateMetadata({ params }) {
    const { ls } = params;
    const data = PathConfig.lost_sectors[ls]
    return {
        title: data.name,
        description: `Infographic for ${data.name} in Destiny 2.`,
        twitter: {
            card: 'summary_large_image',
            title: `${data.name} | chaosd2`,
            description: `Infographic for ${data.name} in Destiny 2.`,
            creator: '@chaosd2dev',
            images: [`${data.ql}/i`]
        },
        openGraph: {
            title: `${data.name} | chaosd2`,
            description: `Infographic for ${data.name} in Destiny 2.`,
            images: [`${data.ql}/i`]
        }
    };
}

export default function LostSectorPage({ params }) {
    const lost_sector_id = params.ls;
    const lost_sector = PathConfig.lost_sectors[lost_sector_id];
    const image = image_sources.lost_sectors[lost_sector_id];
    const { name, ql, location } = lost_sector;
    return (
        <div className={layout.page}>
            <BackgroundImage src={backgrounds.home} />
            <Title title={`${name}, ${location}`} subtitle={"Lost Sectors"} icon_url={BungieIcons.lost_sectors_icon}/>
            <div className={layout.encounter_page}>
                <h2 className={layout.page_subtitle}>{name}, {location}</h2>
                <div className={layout.page_content}>
                    <QuickLink href={ql}/>
                    <div className={custom.image_wrapper}>
                        <Link href={ql + "/i"} className={custom.image_link}>
                            <Image className={custom.image} src={image} alt={"Image Link"} placeholder="blur"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}