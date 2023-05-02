import styles from "./CombinedImage.module.css";

export default function CombinedImage({ image, overlay }){
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={image} alt={""}/>
            <img className={styles.overlay} src={overlay} alt={""}/>
        </div>
    )
}