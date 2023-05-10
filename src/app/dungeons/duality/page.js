import layout from "@src/styles/modules/layout.module.css";
import QuickLink from "@components/QuickLink";
import Dropdown from "@components/Dropdown";
import Image from "next/image";

import Encounter1Map from "@images/dungeons/duality/1.png";
import Encounter2Map from "@images/dungeons/duality/2.png";
import Encounter3Map from "@images/dungeons/duality/3.png";
import LootTable from "@images/dungeons/duality/loot.png";
import Link from "next/link";

export default function Duality() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Encounter 1 - Nightmare of Galrann"} href={"/duality/1"}>
                <div>
                    <QuickLink href={"/duality/1"}/>
                    <Link href={"/duality/1/i"}>
                        <Image src={Encounter1Map} alt={<a href={"/duality/1/i"}>Encounter 1 Map</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
            <Dropdown title={"Encounter 2 - Vault"} href={"/duality/2"}>
                <div>
                    <QuickLink href={"/duality/2"}/>
                    <Link href={"/duality/2/i"}>
                        <Image src={Encounter2Map} alt={<a href={"/duality/2/i"}>Encounter 2 Map</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
            <Dropdown title={"Encounter 3 - Nightmare of Caiatl"} href={"/duality/3"}>
                <div>
                    <QuickLink href={"/duality/3"}/>
                    <Link href={"/duality/3/i"}>
                        <Image src={Encounter3Map} alt={<a href={"/duality/3/i"}>Encounter 3 Map</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
            <Dropdown title={"Loot Table"} href={"/duality/loot"}>
                <div>
                    <QuickLink href={"/duality/loot"}/>
                    <Link href={"/duality/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/duality/loot/i"}>Loot Table</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}