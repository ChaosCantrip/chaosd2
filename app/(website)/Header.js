import styles from "@/styles/modules/header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>destiny.chaoscantrip.com</h1>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li className={styles.menu}>
                        <Link href={"/raids"}>Raids</Link>
                        <ul className={styles.sub_menu}>
                            <li><Link href={"/raids/RoN"}>Root of Nightmares</Link></li>
                            <li><Link href={"/raids/KF"}>King's Fall</Link></li>
                            <li><Link href={"/raids/VotD"}>Vow of the Disciple</Link></li>
                            <li><Link href={"/raids/VoG"}>Vault of Glass</Link></li>
                            <li><Link href={"/raids/DoS"}>Deep Stone Crypt</Link></li>
                            <li><Link href={"/raids/GoS"}>Garden of Salvation</Link></li>
                            <li><Link href={"/raids/LW"}>Last Wish</Link></li>
                        </ul>
                    </li>
                    <li className={styles.menu}>
                        <Link href={"/dungeons"}>Dungeons</Link>
                        <ul className={styles.sub_menu}>
                            <li><Link href={"/dungeons/SotW"}>Spire of the Watcher</Link></li>
                            <li><Link href={"/dungeons/D"}>Duality</Link></li>
                            <li><Link href={"/dungeons/GoA"}>Grasp of Avarice</Link></li>
                            <li><Link href={"/dungeons/P"}>Prophecy</Link></li>
                            <li><Link href={"/dungeons/PoH"}>Pit of Heresy</Link></li>
                            <li><Link href={"/dungeons/SH"}>Shattered Throne</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}