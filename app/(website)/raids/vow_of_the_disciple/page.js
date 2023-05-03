import layout from "@/styles/modules/layout.module.css";
import Dropdown from "@/lib/components/Dropdown";
import QuickLink from "@/lib/components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import LootTable from "@/public/images/raids/vow_of_the_disciple/loot.png";

export default function VowOfTheDisciple() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/vow/loot"}>
                <div>
                    <QuickLink href={"/vow/loot"}/>
                    <Link href={"/vow/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/vow/loot"}>Loot Table</a>} className={layout.dropdown_image}/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}