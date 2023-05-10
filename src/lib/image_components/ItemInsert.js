import {get_item_definition} from "@/src/lib/bungie/APIHandler";
import styles from "./Inserts.module.css";
import CombinedImage from "@image_components/CombinedImage";
import ItemIcons from "@image_components/ItemIcons";


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
                {item_definition.inventory.recipeItemHash ? <CraftableFlag/> : null}
            </div>
            <ItemIcons item={item_definition}/>
        </div>
    )
}

function CraftableFlag() {
    return (
        <div className={styles.craftable_flag}>
            <img src={"https://www.bungie.net/common/destiny2_content/icons/7428ebd2201189d429214a5f3d00ab96.jpg"} className={styles.craftable_icon} alt={""}/>
            <p className={styles.craftable_text}>Craftable</p>
        </div>
    )
}