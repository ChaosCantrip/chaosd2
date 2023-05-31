import styles from "@styles/modules/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Website created by <a className={styles.link} href="https://jdonald.co.uk">ChaosCantrip</a></p>
            <p className={styles.desktop_only}>Website is very new, most guides are still WIP</p>
            <p><a className={styles.link} href={"/legal"}>The Legal Stuff</a></p>
        </footer>
    )
}