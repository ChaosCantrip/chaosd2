import layout from "@/styles/modules/layout.module.css";
import Dropdown from "@/lib/components/Dropdown";
import QuickLink from "@/lib/components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import LootTable from "@/public/images/raids/deep_stone_crypt/loot.png";

export default function DeepStoneCrypt() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/dsc/loot"}>
                <div>
                    <QuickLink href={"/dsc/loot"}/>
                    <Link href={"/dsc/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/dsc/loot"}>Loot Table</a>} className={layout.dropdown_image}/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}