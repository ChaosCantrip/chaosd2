import Link from "next/link";
import layout from "@/styles/modules/layout.module.css";

export default function DungeonsPage() {
    return (
        <div>
            <h1>Dungeons</h1>
            <p>Page Under Construction</p>
            <ul>
                <li><Link href={"/dungeons/SotW"}>Spire of the Watcher</Link></li>
                <li><Link href={"/dungeons/D"}>Duality</Link></li>
                <li><Link href={"/dungeons/GoA"}>Grasp of Avarice</Link></li>
                <li><Link href={"/dungeons/P"}>Prophecy</Link></li>
                <li><Link href={"/dungeons/PoH"}>Pit of Heresy</Link></li>
                <li><Link href={"/dungeons/ST"}>Shattered Throne</Link></li>
            </ul>
        </div>
    )
}