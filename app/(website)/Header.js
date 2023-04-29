import styles from "@/styles/modules/header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.title}>destiny.chaoscantrip.com</h1>
                <nav className={styles.nav}>
                    <div><Link className={styles.link} href={"/"}>Home</Link></div>
                    <div>
                        <Link className={styles.link} href={"/raids"}>Raids</Link>
                        <div className={styles.sub_menu}>
                            <Link href={"/raids/RoN"}>Root of Nightmares</Link>
                            <Link href={"/raids/KF"}>King's Fall</Link>
                            <Link href={"/raids/VotD"}>Vow of the Disciple</Link>
                            <Link href={"/raids/VoG"}>Vault of Glass</Link>
                            <Link href={"/raids/DSC"}>Deep Stone Crypt</Link>
                            <Link href={"/raids/GoS"}>Garden of Salvation</Link>
                            <Link href={"/raids/LW"}>Last Wish</Link>
                        </div>
                    </div>
                    <div>
                        <Link className={styles.link} href={"/dungeons"}>Dungeons</Link>
                        <div className={styles.sub_menu}>
                            <Link href={"/dungeons/SotW"}>Spire of the Watcher</Link>
                            <Link href={"/dungeons/D"}>Duality</Link>
                            <Link href={"/dungeons/GoA"}>Grasp of Avarice</Link>
                            <Link href={"/dungeons/P"}>Prophecy</Link>
                            <Link href={"/dungeons/PoH"}>Pit of Heresy</Link>
                            <Link href={"/dungeons/SH"}>Shattered Throne</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}