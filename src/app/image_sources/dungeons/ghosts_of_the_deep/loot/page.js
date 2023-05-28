import LootTable from "@image_components/LootTable";
import {BungieIcons} from "@components/BungieIcons";
import Background from "@backgrounds/ghosts.jpg";
import styles from "@image_components/LootTable.module.css";
import Image from "next/image";
import ImageHeader from "@image_components/ImageHeader";
import custom from "./custom.module.css";
import ItemInsert from "@image_components/ItemInsert";
import {ClassIcons} from "@image_components/ClassIcons";
import {get_item_definition} from "@lib/bungie/APIHandler";
import CombinedImage from "@image_components/CombinedImage";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

const data = {
    encounters: [
        {
            name: "Hive Ritual",
            "items": [
                "fake_no_survivors",
                "fake_new_pacific_epitaph",
                "fake_cold_comfort",
            ],
            "armour": [
                "Head",
                "Arms",
                "Legs",
            ]
        },
        {
            name: "Ecthar, Shield of Savathûn",
            "items": [
                "fake_greasy_luck",
                "fake_cold_comfort"
            ],
            "armour": [
                "Arms",
                "Chest",
                "Class Item"
            ]
        },
        {
            name: "Simmumah ur-Nokru",
            "items": [
                "any",
                "fake_the_navigator"
            ],
            "armour": [
                "any"
            ]
        }
    ],
    armour: {
        set: "Armor of the Taken King",
        hashes: {
            "Head": [
                "tk_helm",
                "tk_hood",
                "tk_mask"
            ],
            "Arms": [
                "tk_gauntlets",
                "tk_gloves",
                "tk_grasps"
            ],
            "Chest": [
                "tk_plate",
                "tk_vestement",
                "tk_vest"
            ],
            "Legs": [
                "tk_greaves",
                "tk_boots",
                "tk_strides"
            ],
            "Class Item": [
                "tk_mark",
                "tk_bond",
                "tk_cloak"
            ]
        }
    }
}

const armour_hashes = {
    Titan: [],
    Warlock: [],
    Hunter: []
}

for (const armour_piece in data.armour.hashes) {
    armour_hashes.Titan.push(data.armour.hashes[armour_piece][0]);
    armour_hashes.Warlock.push(data.armour.hashes[armour_piece][1]);
    armour_hashes.Hunter.push(data.armour.hashes[armour_piece][2]);
}


export default function GhostsLoot() {
    return (
        <body className={styles.main}>
        <Image src={Background} alt={""} className={styles.background}/>
        <div className={styles.wrapper}>
            <ImageHeader title={"Ghosts of the Deep"} subtitle={"Loot Table"} icon={BungieIcons.dungeons.ghosts_of_the_deep} href={"chaosd2.com/ghosts/loot"}/>
            <div className={custom.content}>
                <div className={custom.left}>
                    <div className={custom.encounter_table}>
                        <Encounter num={1} name={"Hive Ritual"}/>
                        <Encounter num={2} name={"Ecthar, Shield of Savathûn"}/>
                        <Encounter num={3} name={"Simmumah ur-Nokru"} exotic={true}/>
                    </div>
                    <div className={custom.weird}>
                        <h1>Ghosts of the Deep Loot is Weird</h1>
                        <div>
                            <RandomWeaponIcon/>
                            <RandomArmourIcon/>
                            <p>Each encounter has a chance to drop a random weapon or armour piece. These can be any legendary weapons or armour from the Dungeon. Completing the Dungeon also awards a second copy of a piece already obtained.</p>
                        </div>
                        <div>
                            <img src={BungieIcons.deepsight} className={custom.rb}/>
                            <p>Sadly, none of the Dungeon weapons are currently Craftable.</p>
                        </div>
                    </div>
                </div>
                <div className={custom.loot_table}>
                    <h1>Possible Weapons</h1>
                    <div className={custom.weapon_table}>
                        <ItemInsert item_hash={"no_survivors"}/>
                        <ItemInsert item_hash={"new_pacific_epitaph"}/>
                        <ItemInsert item_hash={"greasy_luck"}/>
                        <ItemInsert item_hash={"cold_comfort"}/>
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

async function Encounter({ num, name, exotic=false }) {
    return (
        <div className={`${custom.encounter} ${exotic ? custom.double : null}`}>
            <div className={custom.encounter_header}>
                <p className={custom.encounter_num}>{num}</p>
                <p className={custom.encounter_name}>{name}</p>
            </div>
            <div className={custom.encounter_items}>
                <RandomWeaponIcon/>
                <p>or</p>
                <RandomArmourIcon/>
                {exotic ? (<div className={custom.exotic}> <ItemInsert item_hash={"the_navigator"} /></div>) : null}
            </div>
        </div>
    )
}

function RandomWeaponIcon() {
    return (
        <div className={custom.random_item}>
            <img src={"https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_6ecdda834032a26e090260ba3d02acfa.png"} className={custom.question_mark}/>
        </div>
    )
}

function RandomArmourIcon() {
    return (
        <div className={custom.random_item}>
            <img src={"https://www.bungie.net/common/destiny2_content/icons/DestinyPresentationNodeDefinition_dec89f9a94dd551cd2bc240b4ae845ca.png"} className={custom.question_mark}/>
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