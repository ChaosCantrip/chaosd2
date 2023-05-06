import layout from "@/styles/modules/layout.module.css";
import Dropdown from "@/lib/components/Dropdown";
import QuickLink from "@/lib/components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import LootTable from "@/public/images/raids/garden_of_salvation/loot.png";

export default function GardenOfSalvation() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/garden/loot"}>
                <div>
                    <QuickLink href={"/garden/loot"}/>
                    <Link href={"/garden/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/garden/loot"}>Loot Table</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}