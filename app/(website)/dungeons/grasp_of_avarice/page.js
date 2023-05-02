import layout from "@/styles/modules/layout.module.css";
import Dropdown from "@/lib/components/Dropdown";
import QuickLink from "@/lib/components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import LootTable from "@/public/images/dungeons/grasp_of_avarice/loot.png";

export default function GraspOfAvarice() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/spire/loot"}>
                <div>
                    <QuickLink href={"/grasp/loot"}/>
                    <Link href={"/grasp/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/grasp/loot"}>Loot Table</a>} className={layout.dropdown_image}/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}