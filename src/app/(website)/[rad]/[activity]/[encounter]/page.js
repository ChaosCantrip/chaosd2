import layout from "@styles/modules/layout.module.css";
import Image from "next/image";
import QuickLink from "@components/QuickLink";
import Link from "next/link";
import {PathConfig} from "@components/PathConfig";
import {image_sources} from "@components/ImageImports";
import {notFound} from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
    const params = [];
    for (const rad in PathConfig) {
        for (const activity in PathConfig[rad]) {
            for (const encounter in PathConfig[rad][activity].encounters) {
                params.push({
                    params: {
                        rad: rad,
                        activity: activity,
                        encounter: encounter,
                    }
                });
            }
        }
    }
    return params;
}

export default function EncounterPage({ params }) {
    const { rad, activity, encounter } = params;
    const data = PathConfig[rad][activity].encounters[encounter];
    if (data === undefined) {
        notFound();
    }
    const image = image_sources[rad][activity][encounter];
    const { name, ql } = data;
    return (
        <div className={layout.encounter_page}>
            <h2 className={layout.page_subtitle}>{name}</h2>
            <div className={layout.page_content}>
                <QuickLink href={ql}/>
                <Link href={ql + "/i"}>
                    <Image className={layout.full_image} src={image} alt={"Image Link"} placeholder="blur"/>
                </Link>
            </div>
        </div>
    )
}