import styles from "@/styles/modules/header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h1>Header</h1>
            <nav>
                <ul><Link href={"/"}>Home</Link></ul>
                <ul><Link href={"/raids"}>Raids</Link></ul>
                <ul><Link href={"/dungeons"}>Dungeons</Link></ul>
            </nav>
        </header>
    )
}