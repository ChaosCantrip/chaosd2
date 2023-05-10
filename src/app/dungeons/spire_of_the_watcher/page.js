import layout from "@src/styles/modules/layout.module.css";
import Dropdown from "@components/Dropdown";
import QuickLink from "@components/QuickLink";
import Image from "next/image";
import LootTable from "@images/dungeons/spire_of_the_watcher/loot.png";
import Link from "next/link";

export default function SpireOfTheWatcher() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Loot Table"} href={"/spire/loot"}>
                <div>
                    <QuickLink href={"/spire/loot"}/>
                    <Link href={"/spire/loot/i"}>
                        <Image src={LootTable} alt={<a href={"/spire/loot"}>Loot Table</a>} className={layout.dropdown_image} placeholder="blur"/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}