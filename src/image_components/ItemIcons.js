import styles from "./Inserts.module.css";
import {get_damage_definition} from "@lib/bungie/APIHandler";

const ammo_icons = {
    1: "https://www.bungie.net/common/destiny2_content/icons/99f3733354862047493d8550e46a45ec.png",
    2: "https://www.bungie.net/common/destiny2_content/icons/d920203c4fd4571ae7f39eb5249eaecb.png",
    3: "https://www.bungie.net/common/destiny2_content/icons/78ef0e2b281de7b60c48920223e0f9b1.png",
}

export default async function ItemIcons({ item }) {
    const ammo_icon = ammo_icons[item.equippingBlock.ammoType];
    const damage_type_definitions = [];
    for (const damage_type_hash of item.damageTypeHashes) {
        damage_type_definitions.push(await get_damage_definition(damage_type_hash));
    }
    return (
        <div className={styles.icon_wrapper}>
            <img className={styles.ammo_icon} src={ammo_icon} alt={""}/>
            <div className={styles.damage_types}>
                {damage_type_definitions.map((damage_type_definition, index) => {
                    return <img className={styles.damage_type_icon} src={`https://bungie.net${damage_type_definition.displayProperties.icon}`} alt={""} key={index}/>
                }
                )}
            </div>
        </div>
    )
}