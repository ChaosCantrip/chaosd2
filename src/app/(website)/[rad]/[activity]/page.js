import layout from "@styles/modules/layout.module.css";
import Dropdown from "@components/Dropdown";
import QuickLink from "@components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import {PathConfig} from "@components/PathConfig";
import {image_sources} from "@components/ImageImports";
import Title from "@components/Title";
import {BungieIcons} from "@components/BungieIcons";
import custom from "./custom.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
    const params = [];
    for (const rad in PathConfig) {
        for (const activity in PathConfig[rad]) {
            params.push({
                rad: rad,
                activity: activity,
            });
        }
    }
    return params;
}

export default function ActivityPage({ params }) {
    const { rad, activity } = params;
    const rad_data = PathConfig[rad];
    const data = rad_data[activity];
    return (
        <div className={layout.page}>
            <Title title={data.name} subtitle={rad_data.name} icon_url={BungieIcons[rad][activity]}/>
            <div className={layout.page_content}>
                {Object.keys(data.encounters).map((encounter_id) => {
                    const encounter = data.encounters[encounter_id];
                    return (
                        <div key={encounter_id} className={custom.encounter}>
                            <div className={custom.encounter_title}>
                                <h1 className={custom.encounter_name}>{encounter.name}</h1>
                                <QuickLink href={encounter.ql}/>
                            </div>
                            <div className={custom.image_wrapper}>
                                <Link href={`${encounter.ql}/i`} className={custom.image_link}>
                                    <Image src={image_sources[rad][activity][encounter_id]} alt={<a href={encounter.ql}>{encounter.name}</a>} className={custom.dropdown_image} placeholder="blur"/>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}