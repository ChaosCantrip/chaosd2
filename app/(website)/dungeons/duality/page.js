import layout from "@/styles/modules/layout.module.css";
import QuickLink from "@/lib/components/QuickLink";
import TitleWithBack from "@/lib/components/TitleWithBack";
import Dropdown from "@/lib/components/Dropdown";
import Image from "next/image";

import Encounter1Map from "@/public/images/dungeons/duality/1.png";
import Encounter2Map from "@/public/images/dungeons/duality/2.png";
import Encounter3Map from "@/public/images/dungeons/duality/3.png";
import {BungieIcons} from "@/lib/BungieIcons"

export default function Duality() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Duality"} icon_url={BungieIcons.dungeons.duality}/>
            <div className={layout.content}>
                <Dropdown title={"Encounter 1 - Nightmare of Galrann"}>
                    <div>
                        <QuickLink href={"/duality/1/i"}/>
                        <Image src={Encounter1Map} alt={<a href={"/duality/1/i"}>Encounter 1 Map</a>}/>
                    </div>
                </Dropdown>
                <Dropdown title={"Encounter 2 - Vault"}>
                    <div>
                        <QuickLink href={"/duality/2/i"}/>
                        <Image src={Encounter2Map} alt={<a href={"/duality/2/i"}>Encounter 2 Map</a>}/>
                    </div>
                </Dropdown>
                <Dropdown title={"Encounter 3 - Nightmare of Caiatl"}>
                    <div>
                        <QuickLink href={"/duality/3/i"}/>
                        <Image src={Encounter3Map} alt={<a href={"/duality/3/i"}>Encounter 3 Map</a>}/>
                    </div>
                </Dropdown>

            </div>
        </div>
    )
}