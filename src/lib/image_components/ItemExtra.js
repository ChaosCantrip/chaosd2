import styles from "./Inserts.module.css";

export function ItemExtra({ text }) {
    return (
        <div className={`${styles.item} ${styles.item_extra}`}>
            <p>{text}</p>
        </div>
    )
}