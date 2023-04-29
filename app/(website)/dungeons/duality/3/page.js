import layout from "@/styles/modules/layout.module.css";
import EncounterMap from "@/public/images/dungeons/duality/3.png";
import Image from "next/image";
import QuickLink from "@/lib/components/QuickLink";
import BackButton from "@/lib/components/BackButton";

export default function Encounter3() {
    return (
        <div className={layout.page}>
            <h1 className={layout.page_title}><BackButton/> Duality</h1>
            <h2 className={layout.page_subtitle}>Encounter 3 - Nightmare of Caiatl</h2>
            <div className={layout.content}>
                <QuickLink href={"/duality/3/i"}/>
                <Image className={layout.full_image} src={EncounterMap} alt={<a href={"/images/dungeons/duality/3.png"}>Encounter 1 Map</a>}/>
            </div>
        </div>
    )
}