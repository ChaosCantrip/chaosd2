import styles from './ActivityGridItem.module.css';
import Image from "next/image";
import Link from "next/link";

export default function ActivityGridItem({ name, description, icon, banner, href }) {
    return (
        <Link className={styles.wrapper} href={href}>
            <Image src={banner} alt={""} className={styles.banner}/>
            <div className={styles.content_wrapper}>
                <div className={styles.content_background}/>
                <div className={styles.content}>
                    <div className={styles.content_text}>
                        <h3 className={styles.name}>{name}</h3>
                        <p className={styles.description}>{description}</p>
                    </div>
                    <div className={styles.icon_wrapper}>
                        <img src={icon} alt={""} className={styles.icon}/>
                    </div>
                </div>
            </div>
        </Link>
    )
}