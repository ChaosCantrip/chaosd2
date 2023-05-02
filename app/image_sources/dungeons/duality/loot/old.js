import styles from "./styles.module.css";
import {BungieIcons} from "@/lib/BungieIcons";
import ItemInsert from "@/lib/image_components/ItemInsert";
import ArmourInsert from "@/lib/image_components/ArmourInsert";

export default async function LootPage() {
    return (
        <body className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <img className={styles.logo} src={BungieIcons.dungeons.duality} alt={""}/>
                    <div className={styles.header_text}>
                            <h1 className={styles.title}>Duality</h1>
                            <p className={styles.subtitle}>Loot Table</p>
                    </div>
                    <div className={styles.watermark}>
                        <h2>chaosd2.com/duality/loot</h2>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.grid}>
                        <div className={styles.encounter_name}>
                            <h3>Nightmare of Galhran</h3>
                        </div>
                        <div className={styles.encounter_name}>
                            <h3>Opening the Vault</h3>
                        </div>
                        <div className={styles.encounter_name}>
                            <h3>Nightmare of Caiatl</h3>
                        </div>
                        <div className={styles.loot}>
                            <ItemInsert item_hash={"2026087437"}/>
                            <ItemInsert item_hash={"2263839058"}/>
                        </div>
                        <div className={styles.loot}>
                            <ItemInsert item_hash={"3000847393"}/>
                            <ItemInsert item_hash={"3652506829"}/>
                        </div>
                        <div className={styles.loot}>
                            <div className={styles.item_extra}>
                                <p>Note that completing Duality awards an additional engram that may result in any possible loot from the dungeon.</p>
                            </div>
                            <ItemInsert item_hash={"1780464822"}/>
                            <ItemInsert item_hash={"2194955522"}/>
                            <ItemInsert item_hash={"3664831848"}/>
                        </div>
                        <div className={styles.armor}>
                            <ArmourInsert armour_hashes={["2610749098", "3262689948", "3326914239"]} slot_name={"Helmet"} set_name={"Deep Explorer"}/>
                            <ArmourInsert armour_hashes={["2616310259", "322599957", "3260781446"]} slot_name={"Arms"} set_name={"Deep Explorer"}/>
                            <ArmourInsert armour_hashes={["2649394513", "2724719415", "3798520466"]} slot_name={"Legs"} set_name={"Deep Explorer"}/>
                        </div>
                        <div className={styles.armor}>
                            <ArmourInsert armour_hashes={["2616310259", "322599957", "3260781446"]} slot_name={"Arms"} set_name={"Deep Explorer"}/>
                            <ArmourInsert armour_hashes={["2935559305", "145651147", "1468388696"]} slot_name={"Chest"} set_name={"Deep Explorer"}/>
                            <ArmourInsert armour_hashes={["737550160", "2797334754", "2694773307"]} slot_name={"Class Item"} set_name={"Deep Explorer"}/>
                        </div>
                        <div className={styles.armor}>
                            <ArmourInsert armour_hashes={["2610749098", "3262689948", "3326914239"]} slot_name={"Helmet"} set_name={"Deep Explorer"}/>
                            <ArmourInsert armour_hashes={["2616310259", "322599957", "3260781446"]} slot_name={"Arms"} set_name={"Deep Explorer"}/>
                            <ArmourInsert armour_hashes={["2649394513", "2724719415", "3798520466"]} slot_name={"Legs"} set_name={"Deep Explorer"}/>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}