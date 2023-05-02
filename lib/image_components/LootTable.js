import styles from "./LootTable.module.css";
import ItemInsert from "@/lib/image_components/ItemInsert";
import ArmourInsert from "@/lib/image_components/ArmourInsert";
import AnyArmourInsert from "@/lib/image_components/AnyArmourInsert";

export default async function LootTable({ activity, icon, background, href, data }) {
    return (
        <body className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <img className={styles.logo} src={icon} alt={""}/>
                    <div className={styles.header_text}>
                        <h1 className={styles.title}>{activity}</h1>
                        <p className={styles.subtitle}>Loot Table</p>
                    </div>
                    <div className={styles.watermark}>
                        <h2>{href}</h2>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.grid}>
                        {data.encounters.map((encounter, index) => {
                            return (
                                <div key={index} className={styles.encounter_name}>
                                    <h3>{encounter.name}</h3>
                                </div>
                            )})}
                        {data.encounters.map((encounter, index) => {
                            return (
                                <div key={index} className={styles.items}>
                                    {encounter.items.map((item, index) => {
                                        return (
                                            <ItemInsert key={index} item_hash={item}/>
                                        )
                                    })}
                                </div>
                            )}
                        )}
                        {data.encounters.map((encounter, index) => {
                            if (encounter.armour.length > 0) {
                                return (
                                    <div key={index} className={styles.armor}>
                                        {encounter.armour.map((armour, index) => {
                                            return (
                                                <ArmourInsert key={index} armour_hashes={data.armour.hashes[armour]} slot_name={armour} set_name={data.armour.set}/>
                                            )
                                        })}
                                    </div>
                                )}
                            else {
                                return <AnyArmourInsert armour={data.armour} key={index}/>
                            }
                        })
                        }
                    </div>
                </div>
            </div>
        </body>
    )
}