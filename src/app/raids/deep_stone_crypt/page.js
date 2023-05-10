import layout from "@src/styles/modules/layout.module.css";
import Dropdown from "@components/Dropdown";
import QuickLink from "@components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import LootTable from "@images/raids/deep_stone_crypt/loot.png";

export default function DeepStoneCrypt() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/dsc/loot"}>
                <div>
                    <QuickLink href={"/dsc/loot"}/>
                    <Link href={"/dsc/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/dsc/loot"}>Loot Table</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}