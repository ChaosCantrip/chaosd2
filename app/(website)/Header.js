import styles from "@/styles/modules/header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link prefetch={false} href={"/"} className={styles.logo_link}>
                    <Image src={logo} alt={""} className={styles.logo}/>
                </Link>
                <nav className={styles.nav}>
                    <div><Link prefetch={false} className={styles.link} href={"/"}>Home</Link></div>
                    <div>
                        <Link prefetch={false} className={styles.link} href={"/raids"}>Raids</Link>
                        <div className={styles.sub_menu}>
                            <Link prefetch={false} href={"/raids/root_of_nightmares"}>Root of Nightmares</Link>
                            <Link prefetch={false} href={"/raids/kings_fall"}>King's Fall</Link>
                            <Link prefetch={false} href={"/raids/vow_of_the_disciple"}>Vow of the Disciple</Link>
                            <Link prefetch={false} href={"/raids/vault_of_glass"}>Vault of Glass</Link>
                            <Link prefetch={false} href={"/raids/deep_stone_crypt"}>Deep Stone Crypt</Link>
                            <Link prefetch={false} href={"/raids/garden_of_salvation"}>Garden of Salvation</Link>
                            <Link prefetch={false} href={"/raids/last_wish"}>Last Wish</Link>
                        </div>
                    </div>
                    <div>
                        <Link prefetch={false} className={styles.link} href={"/dungeons"}>Dungeons</Link>
                        <div className={styles.sub_menu}>
                            <Link prefetch={false} href={"/dungeons/spire_of_the_watcher"}>Spire of the Watcher</Link>
                            <Link prefetch={false} href={"/dungeons/duality"}>Duality</Link>
                            <Link prefetch={false} href={"/dungeons/grasp_of_avarice"}>Grasp of Avarice</Link>
                            <Link prefetch={false} href={"/dungeons/prophecy"}>Prophecy</Link>
                            <Link prefetch={false} href={"/dungeons/pit_of_heresy"}>Pit of Heresy</Link>
                            <Link prefetch={false} href={"/dungeons/shattered_throne"}>Shattered Throne</Link>
                        </div>
                    </div>
                    <div><Link prefetch={false} href={"/reference"}>Reference</Link></div>
                </nav>
            </div>
        </header>
    )
}