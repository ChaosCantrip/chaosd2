"use client";

import styles from "@/styles/modules/dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Dropdown({ title, children }) {
    const [open, set_open] = useState(false);
    const toggle_open = () => {
        set_open(!open);
    }
    return (
        <div>
            <div className={styles.top} onClick={toggle_open}>
                <h1 className={styles.title}>{title}</h1>
                <FontAwesomeIcon icon={faChevronLeft} className={`${styles.button} ${open ? styles.btn_open : styles.btn_closed}`} />
            </div>
            <div className={`${styles.content} ${open ? styles.open : styles.closed}`}>
                {children}
            </div>
        </div>
    )
}