import styles from "@/styles/modules/header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>destiny.chaoscantrip.com</h1>
            <nav className={styles.nav}>
                <ul><Link href={"/"}>Home</Link></ul>
                <ul><Link href={"/raids"}>Raids</Link></ul>
                <ul><Link href={"/dungeons"}>Dungeons</Link></ul>
            </nav>
        </header>
    )
}