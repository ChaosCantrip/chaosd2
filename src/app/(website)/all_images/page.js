import layout from "@styles/modules/layout.module.css";
import Title from "@components/Title";
import {PathConfig} from "@components/PathConfig";
import {image_sources} from "@components/ImageImports";
import Image from "next/image";
import styles from "./custom.module.css"
import BackgroundImage from "@components/BackgroundImage";
import Background from "@backgrounds/home.jpg";

export default function AllImagesPage() {
    return (
        <div className={layout.page}>
            <BackgroundImage src={Background}/>
            <Title title={"All Images"} show_back_button={false}/>
            <h1>Raids</h1>
            {Object.entries(PathConfig.raids).map(([raid, raid_data]) => {
                return (
                    <div>
                        <h2>{raid_data.name}</h2>
                        <div className={styles.images_wrapper}>
                            {Object.entries(raid_data.encounters).map(([encounter, encounter_data]) => {
                                return (
                                    <div className={styles.image_wrapper}>
                                        <h3>{encounter_data.name}</h3>
                                        <a href={`${encounter_data.ql}/i`} target="_blank" rel="noreferrer">
                                            <Image src={image_sources.raids[raid][encounter]} alt={""} className={styles.image}/>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            <h1>Dungeons</h1>
            {Object.entries(PathConfig.dungeons).map(([dungeon, dungeon_data]) => {
                return (
                    <div>
                        <h2>{dungeon_data.name}</h2>
                        <div className={styles.images_wrapper}>
                            {Object.entries(dungeon_data.encounters).map(([encounter, encounter_data]) => {
                                return (
                                    <div className={styles.image_wrapper}>
                                        <h3>{encounter_data.name}</h3>
                                        <a href={`${encounter_data.ql}/i`} target="_blank" rel="noreferrer">
                                            <Image src={image_sources.dungeons[dungeon][encounter]} alt={""} className={styles.image}/>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            <h1>Lost Sectors</h1>
            <div>
                <div className={styles.images_wrapper}>
                    {Object.entries(PathConfig.lost_sectors).map(([lost_sector, lost_sector_data]) => {
                        return (
                            <div className={styles.image_wrapper}>
                                <h3>{lost_sector_data.name}</h3>
                                <a href={`${lost_sector_data.ql}/i`} target="_blank" rel="noreferrer">
                                    <Image src={image_sources.lost_sectors[lost_sector]} alt={""} className={styles.image}/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}