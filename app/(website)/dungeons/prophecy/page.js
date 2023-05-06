import layout from "@/styles/modules/layout.module.css";
import Dropdown from "@/lib/components/Dropdown";
import QuickLink from "@/lib/components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import LootTable from "@/public/images/dungeons/prophecy/loot.png";

export default function Prophecy() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/prophecy/loot"}>
                <div>
                    <QuickLink href={"/prophecy/loot"}/>
                    <Link href={"/prophecy/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/prophecy/loot/i"}>Loot Table</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}