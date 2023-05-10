import layout from "@src/styles/modules/layout.module.css";
import Dropdown from "@components/Dropdown";
import QuickLink from "@components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import LootTable from "@images/dungeons/grasp_of_avarice/loot.png";

export default function GraspOfAvarice() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/grasp/loot"}>
                <div>
                    <QuickLink href={"/grasp/loot"}/>
                    <Link href={"/grasp/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/grasp/loot"}>Loot Table</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}