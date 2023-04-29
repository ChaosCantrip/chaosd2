import styles from "@/styles/modules/header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link href={"/"} className={styles.logo_link}>
                    <Image src={logo} alt={""} className={styles.logo}/>
                </Link>
                <nav className={styles.nav}>
                    <div><Link className={styles.link} href={"/"}>Home</Link></div>
                    <div>
                        <Link className={styles.link} href={"/raids"}>Raids</Link>
                        <div className={styles.sub_menu}>
                            <Link href={"/raids/root_of_nightmares"}>Root of Nightmares</Link>
                            <Link href={"/raids/kings_fall"}>King's Fall</Link>
                            <Link href={"/raids/vow_of_the_disciple"}>Vow of the Disciple</Link>
                            <Link href={"/raids/vault_of_glass"}>Vault of Glass</Link>
                            <Link href={"/raids/deep_stone_crypt"}>Deep Stone Crypt</Link>
                            <Link href={"/raids/garden_of_salvation"}>Garden of Salvation</Link>
                            <Link href={"/raids/last_wish"}>Last Wish</Link>
                        </div>
                    </div>
                    <div>
                        <Link className={styles.link} href={"/dungeons"}>Dungeons</Link>
                        <div className={styles.sub_menu}>
                            <Link href={"/dungeons/spire_of_the_watcher"}>Spire of the Watcher</Link>
                            <Link href={"/dungeons/duality"}>Duality</Link>
                            <Link href={"/dungeons/grasp_of_avarice"}>Grasp of Avarice</Link>
                            <Link href={"/dungeons/prophecy"}>Prophecy</Link>
                            <Link href={"/dungeons/pit_of_heresy"}>Pit of Heresy</Link>
                            <Link href={"/dungeons/shattered_throne"}>Shattered Throne</Link>
                        </div>
                    </div>
                    <div><Link href={"/reference"}>Reference</Link></div>
                </nav>
            </div>
        </header>
    )
}