import styles from "./CombinedImage.module.css";

export default function CombinedImage({ item }){
    const main_image = ((item.displayProperties.icon.slice(0, 4) === "http") ? item.displayProperties.icon : `https://bungie.net${item.displayProperties.icon}`);
    const has_overlay = item.iconWatermark;
    const overlay_image = has_overlay ? ((item.iconWatermark.slice(0, 3) === "http") ? item.iconWatermark : `https://bungie.net${item.iconWatermark}`) : null;
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={main_image} alt={""}/>
            {item.iconWatermark && <img className={styles.overlay} src={overlay_image} alt={""}/>}
        </div>
    )
}