import styles from "./LostSector.module.css";
import Image from "next/image";
import ImageHeader from "@image_components/ImageHeader";
import {BungieIcons} from "@components/BungieIcons";
import {get_modifier_definition, string_variables} from "@lib/bungie/APIHandler";

export default async function LostSector({ name, location, background, href, data }) {
    return (
        <body className={styles.main}>
        <img src={background} alt={""} className={styles.background}/>
        <div className={styles.wrapper}>
            <ImageHeader title={name} subtitle={location} icon={BungieIcons.lost_sectors_icon} href={href}/>
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.card_title}>
                        <h1>Legend</h1>
                        <div className={styles.light_level_wrapper}>
                            <p>Light Level</p>
                            <p className={styles.light_level}>1830</p>
                        </div>
                    </div>
                    <div className={styles.card_content}>
                        <ShieldIcons shields={data.Legend.Shields}/>
                        <ChampionIcons champions={data.Legend.Champions}/>
                        <Modifiers modifiers={data.Legend.Modifiers} surges={data.Legend.Surges}/>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_title}>
                        <h1>Master</h1>
                        <div className={styles.light_level_wrapper}>
                            <p>Light Level</p>
                            <p className={styles.light_level}>1840</p>
                        </div>
                    </div>
                    <div className={styles.card_content}>
                        <ShieldIcons shields={data.Master.Shields}/>
                        <ChampionIcons champions={data.Master.Champions}/>
                        <Modifiers modifiers={data.Master.Modifiers} surges={data.Master.Surges}/>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}

function ShieldIcons({ shields }) {
    return (
        <div className={styles.foe_icons_wrapper}>
            <p className={styles.section_header}>Shields</p>
            <div className={styles.foe_icons}>
                {shields.map((shield, index) => {
                    return (
                        <div key={index} className={styles.foe_icon_wrapper}>
                            <img key={index} src={BungieIcons.damage_types[shield]} alt={""} className={styles.foe_icon}/>
                            <p className={styles.foe_icon_text}>{shield}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function ChampionIcons({ champions }) {
    return (
        <div className={styles.foe_icons_wrapper}>
            <p className={styles.section_header}>Champions</p>
            <div className={styles.foe_icons}>
                {champions.map((champion, index) => {
                    return (
                        <div key={index} className={styles.foe_icon_wrapper}>
                            <img key={index} src={BungieIcons.champions[champion]} alt={""} className={styles.foe_icon}/>
                            <p className={styles.foe_icon_text}>{champion}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

async function Modifiers({ modifiers, surges }) {
    const modifier_definitions = []
    for (const modifier of modifiers) {
        modifier_definitions.push(await get_modifier_definition(modifier))
    }
    return (
        <div className={styles.modifiers_wrapper}>
            <p className={styles.section_header}>Modifiers</p>
            <div className={styles.modifiers_grid}>
                {modifier_definitions.map((modifier, index) => {
                    const original_description = modifier.displayProperties.description
                    // search for {var:[0-9]+} and replace with the corresponding value
                    const description = original_description.replace(/{var:[0-9]+}/g, (match) => {
                        const variable = match.slice(5, -1)
                        return string_variables[variable]
                    })
                    return (
                        <div key={index} className={styles.modifier_wrapper}>
                            <div className={styles.modifier_icon_wrapper}>
                                <img key={index} src={`https://www.bungie.net${modifier.displayProperties.icon}`} alt={""} className={styles.modifier_icon}/>
                            </div>
                            <div className={styles.modifier_text_wrapper}>
                                <p className={styles.modifier_name}>{modifier.displayProperties.name}</p>
                                <p className={styles.modifier_description}>{description}</p>
                            </div>
                        </div>
                    )
                })}
                <div className={styles.modifier_wrapper}>
                    <div className={styles.modifier_icon_wrapper}>
                        <img src={"https://www.bungie.net/common/destiny2_content/icons/fa272bcba4bd8a60291713907220da36.png"} alt={""} className={styles.modifier_icon}/>
                    </div>
                    <div className={styles.modifier_text_wrapper}>
                        <p className={styles.modifier_name}>Elemental Surges</p>
                        <p className={styles.modifier_description}>2 Surges of either {surges.map((surge, index) => {
                            if (index === surges.length - 1) {
                                return " or " + surge
                            } else if (index === surges.length - 2) {
                                return surge
                            } else {
                                return surge + ", "
                            }
                        })} will be active.</p>
                        <div className={styles.surge_icons_wrapper}>
                            <div className={styles.surge_icons}>
                                {surges.map((surge, index) => {
                                    return (
                                        <img key={index} src={BungieIcons.damage_types[surge]} alt={""}
                                             className={styles.surge_icon}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}