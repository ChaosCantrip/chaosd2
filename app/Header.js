import styles from "@styles/modules/header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@images/logo.png";
import {BungieIcons} from "@lib/BungieIcons";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div>
                    <Link href={"/"} className={styles.logo_link}>
                        <Image src={logo} alt={""} className={styles.logo}/>
                    </Link>
                    <img src={BungieIcons.ghost_icon} className={styles.ghost_icon}/>
                </div>
                <nav className={styles.nav}>
                    <div><Link className={styles.link} href={"/"}>Home</Link></div>
                    <div>
                        <Link className={styles.link} href={"/raids"}>Raids</Link>
                        <div className={styles.sub_menu}>
                            <SubLink href={"/raids/root_of_nightmares"} icon={BungieIcons.raids.ron}>Root of Nightmares</SubLink>
                            <SubLink href={"/raids/kings_fall"} icon={BungieIcons.raids.kf}>King's Fall</SubLink>
                            <SubLink href={"/raids/vow_of_the_disciple"} icon={BungieIcons.raids.votd}>Vow of the Disciple</SubLink>
                            <SubLink href={"/raids/vault_of_glass"} icon={BungieIcons.raids.vog}>Vault of Glass</SubLink>
                            <SubLink href={"/raids/deep_stone_crypt"} icon={BungieIcons.raids.dsc}>Deep Stone Crypt</SubLink>
                            <SubLink href={"/raids/garden_of_salvation"} icon={BungieIcons.raids.gos}>Garden of Salvation</SubLink>
                            <SubLink href={"/raids/last_wish"} icon={BungieIcons.raids.lw}>Last Wish</SubLink>
                        </div>
                    </div>
                    <div>
                        <Link className={styles.link} href={"/dungeons"}>Dungeons</Link>
                        <div className={styles.sub_menu}>
                            <SubLink href={"/dungeons/spire_of_the_watcher"} icon={BungieIcons.dungeons.sotw}>Spire of the Watcher</SubLink>
                            <SubLink href={"/dungeons/duality"} icon={BungieIcons.dungeons.duality}>Duality</SubLink>
                            <SubLink href={"/dungeons/grasp_of_avarice"} icon={BungieIcons.dungeons.goa}>Grasp of Avarice</SubLink>
                            <SubLink href={"/dungeons/prophecy"} icon={BungieIcons.dungeons.prophecy}>Prophecy</SubLink>
                            <SubLink href={"/dungeons/pit_of_heresy"} icon={BungieIcons.dungeons.poh}>Pit of Heresy</SubLink>
                            <SubLink href={"/dungeons/shattered_throne"} icon={BungieIcons.dungeons.st}>Shattered Throne</SubLink>
                        </div>
                    </div>
                    <div><Link href={"/reference"}>Reference</Link></div>
                </nav>
            </div>
        </header>
    )
}

function SubLink({ href, icon, children }) {
    return (
        <Link href={href} className={styles.sub_link}>
            <img className={styles.sub_icon} src={icon} alt={""}/>
            <p>{children}</p>
        </Link>
    )
}