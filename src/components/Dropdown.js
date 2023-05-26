"use client";

import styles from "@styles/modules/dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faFile } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useRouter } from "next/navigation";
import WIPTag from "@components/WIPTag";

export default function Dropdown({ title, href = null, done, children }) {
    const router = useRouter();
    const [open, set_open] = useState(false);
    const toggle_open = () => {
        set_open(!open);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.left} onClick={toggle_open}>
                    <FontAwesomeIcon icon={faChevronRight} className={`${styles.button} ${open ? styles.btn_open : styles.btn_closed}`} />
                    <h1 className={styles.title}>{title}</h1>
                    { !done ? <WIPTag/> : null}
                </div>
                {
                    href && <FontAwesomeIcon icon={faFile} className={styles.link_icon} onClick={() => {router.push(href)}}/>
                }
            </div>
            <div className={`${styles.content} ${open ? styles.open : styles.closed}`}>
                {children}
            </div>
        </div>
    )
}