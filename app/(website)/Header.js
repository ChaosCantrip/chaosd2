import styles from "@/styles/modules/header.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <a href={"/"} className={styles.logo_link}>
                    <Image src={logo} alt={""} className={styles.logo}/>
                </a>
                <nav className={styles.nav}>
                    <div><a className={styles.link} href={"/"}>Home</a></div>
                    <div>
                        <a className={styles.link} href={"/raids"}>Raids</a>
                        <div className={styles.sub_menu}>
                            <a href={"/raids/root_of_nightmares"}>Root of Nightmares</a>
                            <a href={"/raids/kings_fall"}>King's Fall</a>
                            <a href={"/raids/vow_of_the_disciple"}>Vow of the Disciple</a>
                            <a href={"/raids/vault_of_glass"}>Vault of Glass</a>
                            <a href={"/raids/deep_stone_crypt"}>Deep Stone Crypt</a>
                            <a href={"/raids/garden_of_salvation"}>Garden of Salvation</a>
                            <a href={"/raids/last_wish"}>Last Wish</a>
                        </div>
                    </div>
                    <div>
                        <a className={styles.link} href={"/dungeons"}>Dungeons</a>
                        <div className={styles.sub_menu}>
                            <a href={"/dungeons/spire_of_the_watcher"}>Spire of the Watcher</a>
                            <a href={"/dungeons/duality"}>Duality</a>
                            <a href={"/dungeons/grasp_of_avarice"}>Grasp of Avarice</a>
                            <a href={"/dungeons/prophecy"}>Prophecy</a>
                            <a href={"/dungeons/pit_of_heresy"}>Pit of Heresy</a>
                            <a href={"/dungeons/shattered_throne"}>Shattered Throne</a>
                        </div>
                    </div>
                    <div><a href={"/reference"}>Reference</a></div>
                </nav>
            </div>
        </header>
    )
}