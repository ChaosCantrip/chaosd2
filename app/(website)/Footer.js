import styles from "@/styles/modules/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Website created by <a className={styles.link} href="https://jdonald.co.uk">ChaosCantrip</a></p>
            <p>Not all images are my own, images by other people will be credited.</p>
            <p><a className={styles.link} href={"/legal"}>The Legal Stuff</a></p>
        </footer>
    )
}