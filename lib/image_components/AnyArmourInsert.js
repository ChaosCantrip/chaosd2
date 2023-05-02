import styles from './Inserts.module.css';
import {get_item_definition} from "@/lib/bungie/APIHandler";
import CombinedImage from "@/lib/image_components/CombinedImage";

export default async function AnyArmourInsert({ armour }) {
    const armour_definitions = [];
    for (const [slot, hashes] of Object.entries(armour.hashes)) {
        for (const armour_hash of hashes) {
            armour_definitions.push(await get_item_definition(armour_hash));
        }
    }
    return (
        <div className={`${styles.item} ${styles.any_armour}`}>
            <div className={styles.icons_wrapper}>
                {armour_definitions.map((armour, index) => {
                    return (<CombinedImage key={index} item={armour}/>)
                })}
            </div>
            <div className={styles.text_wrapper}>
                <h3>Any Armour</h3>
                <p>{armour.set}</p>
            </div>
        </div>
    )
}