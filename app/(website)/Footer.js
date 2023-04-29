import styles from "@/styles/modules/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Website created by ChaosCantrip</p>
            <p>Not all images are my own, images by other people will be credited.</p>
            <p><a href={"/legal"}>The Legal Stuff</a></p>
        </footer>
    )
}