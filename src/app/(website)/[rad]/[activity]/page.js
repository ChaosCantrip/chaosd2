import layout from "@styles/modules/layout.module.css";
import Dropdown from "@components/Dropdown";
import QuickLink from "@components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import {PathConfig} from "@components/PathConfig";
import {image_sources} from "@components/ImageImports";

export default function ActivityPage({ params }) {
    const { rad, activity } = params;
    const data = PathConfig[rad][activity];
    return (
        <div className={layout.page_content}>
            {Object.keys(data.encounters).map((encounter_id) => {
                const encounter = data.encounters[encounter_id];
                return (
                    <Dropdown title={encounter.name} href={encounter.ql} key={encounter_id}>
                        <div>
                            <QuickLink href={encounter.ql}/>
                            <Link href={`${encounter.ql}/i`}>
                                <Image src={image_sources[rad][activity][encounter_id]} alt={<a href={encounter.ql}>{encounter.name}</a>} className={layout.dropdown_image} placeholder="blur"/>
                            </Link>
                        </div>
                    </Dropdown>
                )
            })}
        </div>
    )
}