import styles from "./CombinedImage.module.css";

export default function CombinedImage({ item }){
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={`https://bungie.net${item.displayProperties.icon}`} alt={""}/>
            <img className={styles.overlay} src={`https://bungie.net${item.iconWatermark}`} alt={""}/>
        </div>
    )
}