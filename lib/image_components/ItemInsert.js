import {get_item_definition} from "@/lib/bungie/APIHandler";
import styles from "./Inserts.module.css";
import DamageType from "@/lib/image_components/DamageType";
import CombinedImage from "@/lib/image_components/CombinedImage";


export default async function ItemInsert({ item_hash }) {
    const item_definition = await get_item_definition(item_hash);
    return (
        <div className={styles.item}>
            <CombinedImage item={item_definition}/>
            <div className={styles.text}>
                <h3 className={styles.name}>{item_definition.displayProperties.name}</h3>
                <p className={styles.type}>{item_definition.itemTypeAndTierDisplayName}</p>
                <DamageType damage_hash={item_definition.defaultDamageTypeHash}/>
            </div>
        </div>
    )
}