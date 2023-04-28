import Link from "next/link";

import layout from "@/styles/modules/layout.module.css";

export default function Raids() {
    return (
        <div>
            <h1>Raids</h1>
            <p>Page Under Construction</p>
            <ul>
                <li><Link href={"/raids/RoN"}>Root of Nightmares</Link></li>
                <li><Link href={"/raids/KF"}>King's Fall</Link></li>
                <li><Link href={"/raids/VoG"}>Vow of the Disciple</Link></li>
                <li><Link href={"/raids/VoG"}>Vault of Glass</Link></li>
                <li><Link href={"/raids/DSC"}>Deep Stone Crypt</Link></li>
                <li><Link href={"/raids/GoS"}>Garden of Salvation</Link></li>
                <li><Link href={"/raids/LW"}>Last Wish</Link></li>
            </ul>
        </div>
    )
}