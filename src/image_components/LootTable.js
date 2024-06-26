import styles from "./LootTable.module.css";
import ItemInsert from "@image_components/ItemInsert";
import ArmourInsert from "@image_components/ArmourInsert";
import AnyArmourInsert from "@image_components/AnyArmourInsert";
import Image from "next/image";
import AnyItemInsert from "@image_components/AnyItemInsert";
import {ItemExtra} from "@image_components/ItemExtra";
import ImageHeader from "@image_components/ImageHeader";
import UnknownArmourInsert from "@image_components/UnknownArmourInsert";
import UnknownItemInsert from "@image_components/UnknownItemInsert";

export default async function LootTable({ activity, icon, background, href, data }) {
    return (
        <body className={styles.main}>
            <Image src={background} alt={""} className={styles.background}/>
            <div className={styles.wrapper}>
                <ImageHeader title={activity} subtitle={"Loot Table"} icon={icon} href={href}/>
                <div className={styles.content}>
                    <div className={styles.grid}>
                        {data.encounters.map((encounter, index) => {
                            return (
                                <div key={index} className={styles.encounter_name}>
                                    <h3>{encounter.name}</h3>
                                </div>
                            )})}
                        {data.encounters.map((encounter, index) => {
                            if (encounter.items.length > 0) {
                                return (
                                    <div key={index} className={styles.items}>
                                        {encounter.items.map((item, index) => {
                                            if (item === "any") { return <AnyItemInsert key={index}/> }
                                            else if (item === "unknown") { return <UnknownItemInsert key={index}/> }
                                            else if (item.slice(0, 5) === "fake_") { return <ItemInsert key={index} item_hash={item.slice(5)}/> }
                                            else if (isNaN(item)) { return <ItemExtra key={index} text={item}/> }
                                            else { return <ItemInsert key={index} item_hash={item}/> }
                                        })}
                                    </div>
                                )}
                            else {
                                return (
                                    <div key={index} className={styles.items}>
                                        <AnyItemInsert />
                                    </div>
                                )
                            }
                        })}
                        {data.encounters.map((encounter, index) => {
                            if (encounter.armour.length > 0) {
                                return (
                                    <div key={index} className={styles.armor}>
                                        {encounter.armour.map((armour, index) => {
                                            if (armour === "any") { return <AnyArmourInsert key={index}/> }
                                            else if (armour === "unknown") { return <UnknownArmourInsert key={index}/> }
                                            return (
                                                <ArmourInsert key={index} armour_hashes={data.armour.hashes[armour]} slot_name={armour} set_name={data.armour.set}/>
                                            )
                                        })}
                                    </div>
                                )}
                            else {
                                return (
                                    <div key={index} className={styles.armor}>
                                        <AnyArmourInsert />
                                    </div>
                                )
                            }
                        })
                        }
                    </div>
                </div>
            </div>
        </body>
    )
}