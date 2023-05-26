import styles from "@styles/modules/header.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@images/logo.png";
import {BungieIcons} from "@components/BungieIcons";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div>
                    <Link href={"/"} className={styles.logo_link}>
                        <Image src={logo} alt={""} className={styles.logo}/>
                    </Link>
                    <img src={BungieIcons.ghost_icon} className={styles.ghost_icon} alt={""}/>
                </div>
                <nav className={styles.nav}>
                    <NavLink href={"/home"}>Home</NavLink>
                    <SubMenu href={"/raids"} name={"Raids"}>
                        <SubLink href={"/raids/root_of_nightmares"} icon={BungieIcons.raids.root_of_nightmares}>Root of Nightmares</SubLink>
                        <SubLink href={"/raids/kings_fall"} icon={BungieIcons.raids.kings_fall}>King's Fall</SubLink>
                        <SubLink href={"/raids/vow_of_the_disciple"} icon={BungieIcons.raids.vow_of_the_disciple}>Vow of the Disciple</SubLink>
                        <SubLink href={"/raids/vault_of_glass"} icon={BungieIcons.raids.vault_of_glass}>Vault of Glass</SubLink>
                        <SubLink href={"/raids/deep_stone_crypt"} icon={BungieIcons.raids.deep_stone_crypt}>Deep Stone Crypt</SubLink>
                        <SubLink href={"/raids/garden_of_salvation"} icon={BungieIcons.raids.garden_of_salvation}>Garden of Salvation</SubLink>
                        <SubLink href={"/raids/last_wish"} icon={BungieIcons.raids.last_wish}>Last Wish</SubLink>
                    </SubMenu>
                    <SubMenu href={"/dungeons"} name={"Dungeons"}>
                        <SubLink href={"/dungeons/ghosts_of_the_deep"} icon={BungieIcons.dungeons.ghosts_of_the_deep}>Ghosts of the Deep</SubLink>
                        <SubLink href={"/dungeons/spire_of_the_watcher"} icon={BungieIcons.dungeons.spire_of_the_watcher}>Spire of the Watcher</SubLink>
                        <SubLink href={"/dungeons/duality"} icon={BungieIcons.dungeons.duality}>Duality</SubLink>
                        <SubLink href={"/dungeons/grasp_of_avarice"} icon={BungieIcons.dungeons.grasp_of_avarice}>Grasp of Avarice</SubLink>
                        <SubLink href={"/dungeons/prophecy"} icon={BungieIcons.dungeons.prophecy}>Prophecy</SubLink>
                        <SubLink href={"/dungeons/pit_of_heresy"} icon={BungieIcons.dungeons.pit_of_heresy}>Pit of Heresy</SubLink>
                        <SubLink href={"/dungeons/shattered_throne"} icon={BungieIcons.dungeons.shattered_throne}>Shattered Throne</SubLink>
                    </SubMenu>
                    <NavLink href={"/reference"}>Reference</NavLink>
                    <NavLink href={"/socials"}>Socials</NavLink>
                </nav>
            </div>
        </header>
    )
}

// <NavLink href={"/voting"}>Voting</NavLink>

function NavLink({ href, preload=true, children }) {
    return (
        <div>
            <Link className={styles.link} href={href}>{children}</Link>
        </div>
    )
}

function SubMenu({ href, name, children }) {
    return (
        <div>
            <Link className={styles.link} href={href}>{name}</Link>
            <div className={styles.sub_menu}>
                {children}
            </div>
        </div>
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