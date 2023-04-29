import Link from "next/link";
import layout from "@/styles/modules/layout.module.css";

export const metadata = {
    "title": "Dungeons",
}

export default function DungeonsPage() {
    return (
        <div className={layout.page}>
            <h1 className={layout.page_title}>Dungeons</h1>
            <p>Page Under Construction</p>
            <ul>
                <li><Link href={"/dungeons/spire_of_the_watcher"}>Spire of the Watcher</Link></li>
                <li><Link href={"/dungeons/duality"}>Duality</Link></li>
                <li><Link href={"/dungeons/grasp_of_avarice"}>Grasp of Avarice</Link></li>
                <li><Link href={"/dungeons/prophecy"}>Prophecy</Link></li>
                <li><Link href={"/dungeons/pit_of_heresy"}>Pit of Heresy</Link></li>
                <li><Link href={"/dungeons/shattered_throne"}>Shattered Throne</Link></li>
            </ul>
        </div>
    )
}