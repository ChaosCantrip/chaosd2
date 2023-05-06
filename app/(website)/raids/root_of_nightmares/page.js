import layout from "@/styles/modules/layout.module.css";
import Dropdown from "@/lib/components/Dropdown";
import QuickLink from "@/lib/components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import LootTable from "@/public/images/raids/root_of_nightmares/loot.png";

export default function RootOfNightmares() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/root/loot"}>
                <div>
                    <QuickLink href={"/root/loot"}/>
                    <Link href={"/root/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/root/loot"}>Loot Table</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}