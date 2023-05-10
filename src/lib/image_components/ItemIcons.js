import styles from "./Inserts.module.css";
import {get_damage_definition} from "@/src/lib/bungie/APIHandler";

const ammo_icons = {
    1: "https://www.bungie.net/common/destiny2_content/icons/dc4bb9bcdd4ae8a83fb9007a51d7d711.png",
    2: "https://www.bungie.net/common/destiny2_content/icons/b6d3805ca8400272b7ee7935b0b75c79.png",
    3: "https://www.bungie.net/common/destiny2_content/icons/9fa60d5a99c9ff9cea0fb6dd690f26ec.png",
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