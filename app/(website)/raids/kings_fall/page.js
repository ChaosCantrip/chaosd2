import layout from "@/styles/modules/layout.module.css";
import Dropdown from "@/lib/components/Dropdown";
import QuickLink from "@/lib/components/QuickLink";
import Link from "next/link";
import Image from "next/image";
import LootTable from "@/public/images/raids/kings_fall/rb.png";

export default function KingsFall() {
    return (
        <div className={layout.page_content}>
            <Dropdown title={"Red Border Chest"} href={"/kf/rb"}>
                <div>
                    <QuickLink href={"/kf/rb"}/>
                    <Link href={"/kf/rb/i"}>
                        <Image src={LootTable} alt={<a href={"/kf/rb"}>Red Border Chest</a>} className={layout.dropdown_image}/>
                    </Link>
                </div>
            </Dropdown>
        </div>
    )
}