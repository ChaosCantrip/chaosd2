import styles from './Inserts.module.css';

export default async function UnknownArmourInsert() {
    return (
        <div className={`${styles.item} ${styles.unknown_item}`}>
            <div className={styles.text_wrapper}>
                <div className={styles.text}>
                    <div className={styles.name_wrapper}>
                        <h3 className={styles.name}>Unknown Armour</h3>
                    </div>
                    <p>We don't have enough data to tell what armour will drop from here yet. We'll fill this out soon!</p>
                </div>
            </div>
        </div>
    )
}