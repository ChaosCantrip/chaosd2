import {get_item_definition} from "@lib/bungie/APIHandler";
import styles from "./Inserts.module.css";
import CombinedImage from "@image_components/CombinedImage";
import ItemIcons from "@image_components/ItemIcons";
import {BungieIcons} from "@components/BungieIcons";


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
            <img src={BungieIcons.deepsight} className={styles.craftable_icon} alt={""}/>
            <p className={styles.craftable_text}>Craftable</p>
        </div>
    )
}