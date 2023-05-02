import {get_damage_definition} from "@/lib/bungie/APIHandler";
import styles from "@/app/image_sources/dungeons/duality/loot/styles.module.css";


export default async function DamageType({ damage_hash }) {
    const damage_definition = await get_damage_definition(damage_hash);
    return (
        <div className={styles.damage_type}>
            <img className={styles.damage_type_icon} src={`https://bungie.net${damage_definition.displayProperties.icon}`} alt={""}/>
            <p className={styles.damage_type_name}>{damage_definition.displayProperties.name}</p>
        </div>
    )
}