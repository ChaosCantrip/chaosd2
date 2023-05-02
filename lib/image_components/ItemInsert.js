import {get_item_definition} from "@/lib/bungie/APIHandler";
import styles from "./Inserts.module.css";
import DamageType from "@/lib/image_components/DamageType";
import CombinedImage from "@/lib/image_components/CombinedImage";
import ItemIcons from "@/lib/image_components/ItemIcons";


export default async function ItemInsert({ item_hash }) {
    const item_definition = await get_item_definition(item_hash);
    return (
        <div className={styles.item}>
            <CombinedImage item={item_definition}/>
            <div className={styles.text}>
                <div className={styles.name_wrapper}>
                    <h3 className={styles.name}>{item_definition.displayProperties.name}</h3>
                </div>
                <p className={styles.type}>{item_definition.itemTypeAndTierDisplayName}</p>
            </div>
            <ItemIcons item={item_definition}/>
        </div>
    )
}