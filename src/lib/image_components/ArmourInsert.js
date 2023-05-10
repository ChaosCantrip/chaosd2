import {get_item_definition} from "@/src/lib/bungie/APIHandler";
import styles from "./Inserts.module.css";
import CombinedImage from "@image_components/CombinedImage";


export default async function ArmourInsert({ armour_hashes, slot_name, set_name }) {
    const armour_definitions = [];
    for (const armour_hash of armour_hashes) {
        armour_definitions.push(await get_item_definition(armour_hash));
    }
    return (
        <div className={styles.item}>
            <div className={styles.armor_images}>
                {armour_definitions.map((armour_definition, index) => {
                    return <CombinedImage item={armour_definition} key={index}/>
                })
                }
            </div>
            <div className={styles.text}>
                <h3 className={styles.name}>{slot_name}</h3>
                <p className={styles.type}>{set_name}</p>
            </div>
        </div>
    )
}