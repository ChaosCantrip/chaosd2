import styles from './Inserts.module.css';

export default async function AnyArmourInsert() {
    return (
        <div className={`${styles.item} ${styles.any_item}`}>
            <div className={styles.text_wrapper}>
                <div className={styles.text}>
                    <div className={styles.name_wrapper}>
                        <h3 className={styles.name}>Any Armour</h3>
                    </div>
                    <p>This encounter may also drop any armour found in the other encounters</p>
                </div>
            </div>
        </div>
    )
}