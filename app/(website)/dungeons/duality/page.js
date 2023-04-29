import layout from "@/styles/modules/layout.module.css";
import Link from "next/link";
import QuickLink from "@/lib/components/QuickLink";
import BackButton from "@/lib/components/BackButton";

export const metadata = {
    "title": "Duality",
}

export default function Duality() {
    return (
        <div className={layout.page}>
            <div className={layout.page_title_wrapper}>
                <BackButton />
                <h1 className={layout.page_title}>Duality</h1>
            </div>
            <div className={layout.content}>
                <Link href={"/dungeons/duality/1"}>
                    <h2>Encounter 1 - Nightmare of Galrann</h2>
                </Link>
                <QuickLink href={"/duality/1/i"}/>
                <Link href={"/dungeons/duality/2"}>
                    <h2>Encounter 2 - Vault</h2>
                </Link>
                <QuickLink href={"/duality/2/i"}/>
                <Link href={"/dungeons/duality/3"}>
                    <h2>Encounter 3 - Nightmare of Caiatl</h2>
                </Link>
                <QuickLink href={"/duality/3/i"}/>
            </div>
        </div>
    )
}