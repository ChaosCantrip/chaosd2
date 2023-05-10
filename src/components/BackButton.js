"use client";

import { useRouter, usePathname } from "next/navigation";

import styles from "@styles/modules/back_button.module.css";


export default function BackButton({ subtitle = null }) {
    const router = useRouter();
    const pathname = usePathname();
    const target = pathname.split("/").slice(0, -1).join("/");
    let auto_subtitle = pathname.split("/").slice(-2)[0].split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return (
        <h2 className={styles.button} onClick={() => router.push(target)}>
            {subtitle || auto_subtitle}
        </h2>
    )
}