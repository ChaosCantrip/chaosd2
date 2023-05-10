import styles from "@image_components/Inserts.module.css";

export default function AnyItemInsert() {
    return (
        <div className={`${styles.item} ${styles.any_item}`}>
            <div className={styles.text_wrapper}>
                <div className={styles.text}>
                    <div className={styles.name_wrapper}>
                        <h3 className={styles.name}>Any Weapon</h3>
                    </div>
                    <p>This encounter may also drop any weapon found in the other encounters</p>
                </div>
            </div>
        </div>
    )
}