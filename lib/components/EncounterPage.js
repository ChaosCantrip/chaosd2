import layout from "@/styles/modules/layout.module.css";
import Image from "next/image";
import QuickLink from "@/lib/components/QuickLink";

export default function EncounterPage({ image_ql, encounter_name, map }) {
    return (
        <div className={layout.encounter_page}>
            <h2 className={layout.page_subtitle}>{encounter_name}</h2>
            <div className={layout.page_content}>
                <QuickLink href={image_ql}/>
                <Image className={layout.full_image} src={map} alt={<a href={image_ql}>{encounter_name} Map</a>} placeholder="blur"/>
            </div>
        </div>
    )
}