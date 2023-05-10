"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "@styles/modules/quick_link.module.css";

import { useState } from "react";

export default function QuickLink({ href }) {
    const [copied, set_copied] = useState(false);
    const copy_link = () => {
        navigator.clipboard.writeText(`https://chaosd2.com${href}`);
        set_copied(true);
        setTimeout(() => {
            set_copied(false);
        }, 3000);
    }
    const get_icon = () => {
        if (copied) {
            return faCheck;
        } else {
            return faCopy;
        }
    }
    const get_tooltip_text = () => {
        if (copied) {
            return "Copied!";
        } else {
            return "Copy Link";
        }
    }
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Quick Link: </p>
            <a href={href} className={styles.link}>https://chaosd2.com{href}</a>
            <button onClick={copy_link} className={styles.button}>
                <FontAwesomeIcon icon={get_icon()} />
                <div className={styles.tooltip}>
                    <p className={styles.tooltip_text}>{get_tooltip_text()}</p>
                </div>
            </button>
        </div>
    )
}