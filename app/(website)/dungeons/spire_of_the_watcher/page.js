import layout from "@/styles/modules/layout.module.css";
import Dropdown from "@/lib/components/Dropdown";
import QuickLink from "@/lib/components/QuickLink";
import Image from "next/image";
import LootTable from "@/public/images/dungeons/spire_of_the_watcher/loot.png";
import Link from "next/link";

export default function SpireOfTheWatcher() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/spire/loot"}>
                <div>
                    <QuickLink href={"/spire/loot"}/>
                    <Link href={"/spire/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/spire/loot"}>Loot Table</a>} className={layout.dropdown_image}/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}