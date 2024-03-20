import styles from "./ImageUnderConstruction.module.css";
import KeepAlive from "@image_components/KeepAlive";

export default function ImageUnderConstruction() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2>Work in Progress</h2>
                <p>This page is currently under construction. Please check back later.</p>
                <p>chaosd2 is a solo passion project, and is relatively new, so I haven't yet had time to design all of the guides.</p>
                <p>I am prioritising those encounters that I feel require a guide or map more so than the others.</p>
                <p>Please be patient, and I will get around to completing this one eventually.</p>
            </div>
            <KeepAlive />
        </div>
    )
}