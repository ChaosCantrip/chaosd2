import styles from "@styles/modules/footer.module.css";
import WIPTag from "@components/WIPTag";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Website created by <a className={styles.link} href="https://jdonald.co.uk">ChaosCantrip</a></p>
            <p className={styles.desktop_only}>Website is very new, most guides are still a <span className={styles.wip}><WIPTag/></span></p>
            <p><a className={styles.link} href={"/legal"}>The Legal Stuff</a></p>
        </footer>
    )
}