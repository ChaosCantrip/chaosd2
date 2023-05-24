import styles from "@image_components/LootTable.module.css";
import ImageHeader from "@image_components/ImageHeader";
import Image from "next/image";
import Background from "@backgrounds/last_wish.jpg";
import {BungieIcons} from "@components/BungieIcons";
import custom from "./custom.module.css";
import {get_item_definition} from "@lib/bungie/APIHandler";
import ItemInsert from "@image_components/ItemInsert";
import CombinedImage from "@image_components/CombinedImage";
import {ClassIcons} from "@image_components/ClassIcons";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const armour_hashes = {
    Titan: [
        3546379828,
        1952647501,
        1146451699,
        2623446543,
        3351877674
    ],
    Warlock: [
        1350126011,
        2850984298,
        4241329310,
        1890196228,
        3570956455
    ],
    Hunter: [
        3423279826,
        3889633083,
        2180477077,
        2298096557,
        877968616
    ],
}

export default function LWLoot() {
    return (
        <body className={styles.main}>
            <Image src={Background} alt={""} className={styles.background}/>
            <div className={styles.wrapper}>
                <ImageHeader title={"Last Wish"} subtitle={"Loot Table"} icon={BungieIcons.raids.last_wish} href={"chaosd2.com/lw/loot"}/>
                <div className={custom.content}>
                    <div className={custom.left}>
                        <div className={custom.encounter_table}>
                            <Encounter num={1} name={"Kalli, the Corrupted"} item_hash={424291879}/>
                            <Encounter num={2} name={"Shuro Chi, the Corrupted"} item_hash={3885259140}/>
                            <Encounter num={3} name={"Morgeth, the Spirekeeper"} item_hash={70083888}/>
                            <Encounter num={4} name={"The Vault"} item_hash={3388655311}/>
                            <Encounter num={"5 | 6"} name={"Riven of a Thousand Voices  |  Queenswalk"} item_hash={501329015} exotic={true}/>
                        </div>
                        <div className={custom.weird}>
                            <h1>Last Wish Loot is Weird</h1>
                            <div>
                                <RandomIcon/>
                                <p>Each encounter has a chance to drop a random weapon or armour piece. These can be any legendary weapons or armour from the raid.</p>
                            </div>
                            <div>
                                <img src={"https://www.bungie.net/common/destiny2_content/icons/7428ebd2201189d429214a5f3d00ab96.jpg"} className={custom.rb}/>
                                    <p>Red Border Weapons can drop randomly as normal, but Hawthorne also sells a pursuit to complete all encounters of the raid, which will award guaranteed Last Wish pattern progress. Additionally, completing this pursuit allows you to purchase 1 additional Deepsight Weapon from Hawthorne.</p>
                            </div>
                        </div>
                    </div>
                    <div className={custom.loot_table}>
                        <h1>Possible Weapons</h1>
                        <div className={custom.weapon_table}>
                            <ItemInsert item_hash={501329015}/>
                            <ItemInsert item_hash={2884596447}/>
                            <ItemInsert item_hash={3885259140}/>
                            <ItemInsert item_hash={424291879}/>
                            <ItemInsert item_hash={70083888}/>
                            <ItemInsert item_hash={3591141932}/>
                            <ItemInsert item_hash={3388655311}/>
                            <ItemInsert item_hash={1851777734}/>
                        </div>
                        <h1>Possible Armour</h1>
                        <div className={custom.right_bottom}>
                            <div className={custom.armour_section}>
                                <div className={custom.armour_table}>
                                    <ArmourSet armour_hashes={armour_hashes.Titan} class_icon={ClassIcons.Titan}/>
                                    <ArmourSet armour_hashes={armour_hashes.Warlock} class_icon={ClassIcons.Warlock}/>
                                    <ArmourSet armour_hashes={armour_hashes.Hunter} class_icon={ClassIcons.Hunter}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

async function Encounter({ num, name, item_hash, exotic=false }) {
    const item_definition = await get_item_definition(item_hash);
    return (
        <div className={`${custom.encounter} ${exotic ? custom.double : null}`}>
            <div className={custom.encounter_header}>
                <p className={custom.encounter_num}>{num}</p>
                <p className={custom.encounter_name}>{name}</p>
            </div>
            <div className={custom.encounter_items}>
                <div className={custom.curated_icon}>
                    <CombinedImage item={item_definition}/>
                </div>
                <p>+</p>
                <RandomIcon/>
                {exotic ? <p>+</p> : null}
                {exotic ? <CombinedImage item={await get_item_definition(2069224589)}/> : null}
            </div>
        </div>
    )
}

function RandomIcon() {
    return (
        <div className={custom.random_item}>
            <img src={"https://www.bungie.net/common/destiny2_content/icons/ef1a8374c931321694d6d3d0d3e96247.png"} className={custom.question_mark}/>
        </div>
    )
}

async function ArmourSet({ armour_hashes, class_icon }) {
    const armour_definitions = [];
    for (const armour_hash of armour_hashes) {
        armour_definitions.push(await get_item_definition(armour_hash));
    }
    return (
        <div className={custom.armour_set}>
            <div className={custom.class_icon_wrapper}>
                <img src={class_icon} className={custom.class_icon}/>
            </div>
            {armour_definitions.map((armour_definition, index) => {
                return <CombinedImage item={armour_definition} key={index}/>
            })
            }
        </div>
    )
}