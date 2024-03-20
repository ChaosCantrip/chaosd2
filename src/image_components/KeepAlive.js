import styles from "./KeepAlive.module.css";

export default function KeepAlive() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text_wrapper}>
                <p className={styles.text}><span>chaosd2</span> needs your help!</p>
                <p className={styles.text}>Learn more and help keep us online at <span>chaosd2.com/support</span></p>
            </div>
        </div>
    );
}