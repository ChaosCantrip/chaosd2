"use client";

import styles from "@/styles/modules/dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Dropdown({ title, children }) {
    const [open, set_open] = useState(false);
    const toggle_open = () => {
        set_open(!open);
    }
    return (
        <div>
            <div className={styles.top}>
                <h1 className={styles.title} onClick={toggle_open}>{title}</h1>
                <FontAwesomeIcon icon={open ? faChevronDown : faChevronLeft} onClick={toggle_open} className={styles.button} />
            </div>
            <div className={`${styles.content} ${open ? styles.open : styles.closed}`}>
                {children}
            </div>
        </div>
    )
}