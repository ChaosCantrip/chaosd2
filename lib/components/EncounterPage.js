import layout from "@/styles/modules/layout.module.css";
import Image from "next/image";
import QuickLink from "@/lib/components/QuickLink";
import BackButton from "@/lib/components/BackButton";

export default function EncounterPage({ image_ql, activity_name, encounter_name, map }) {
    return (
        <div className={layout.page}>
            <h1 className={layout.page_title}><BackButton/>{activity_name}</h1>
            <h2 className={layout.page_subtitle}>{encounter_name}</h2>
            <div className={layout.content}>
                <QuickLink href={image_ql}/>
                <Image className={layout.full_image} src={map} alt={<a href={image_ql}>{encounter_name} Map</a>}/>
            </div>
        </div>
    )
}