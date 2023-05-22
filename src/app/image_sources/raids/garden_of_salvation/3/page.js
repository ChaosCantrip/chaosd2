import styles from "@image_components/LootTable.module.css";
import ImageHeader from "@image_components/ImageHeader";
import Image from "next/image";
import Background from "@backgrounds/garden.jpg";
import {BungieIcons} from "@components/BungieIcons";
import custom from "./custom.module.css";
import image from "./image.png";

export const metadata = {
    other: {
        width: 1920,
        height: 1080,
    }
}

export default function GardenEncounter3() {
    return (
        <body className={styles.main}>
            <Image src={Background} alt={""} className={styles.background}/>
            <div className={styles.wrapper}>
                <ImageHeader title={"Garden of Salvation"} subtitle={"Defeat the Consecrated Mind"} icon={BungieIcons.raids.garden_of_salvation} href={"chaosd2.com/gos/3"}/>
                <div className={custom.content}>
                    <div className={custom.image_wrapper}>
                        <Image src={image} alt={""} className={custom.image}/>
                    </div>
                    <div className={custom.text_wrapper}>
                        <div className={custom.text}>
                            <div>
                                <h2>Eyes Team - 3 Players</h2>
                                <p>Follow the boss around the arena. Make sure not to pick up any motes, as this will delay the Gambit Team</p>
                                <p>The boss will move into one of the side rooms, and place a Voltaic Overflow in front of it. One member of the team should pick this up. When they do, 3 of the boss' eyes will glow.</p>
                                <p>Communicate to your team whether these are the inner or outer eyes, and the three of you should quickly shoot out the correct set of eyes.</p>
                                <p>Remember you cannot pick up a second Voltaic Overflow if you still have the buff from last time, as you will die.</p>
                                <p>If you fail to shoot out all of the eyes, the person that picked up the buff will be killed.</p>
                                <p>Rinse and repeat until the Gambit team activates the damage phase.</p>
                            </div>
                            <div>
                                <h2>Gambit Team - 3 Players</h2>
                                <p>One of the confluxes from the previous encounter will be shooting a beam into the sky, and Vex will be moving to sacrifice themselves to it.</p>
                                <p>Around the centre of the arena, Void Shielded Minotaurs will start to spawn. Kill these minotaurs, and pick up the 5 motes that they drop. Dunk these motes into the glowing conflux to gain the Enlightened Buff, so you can destroy the shielded Vex in the area.</p>
                                <p>Once you have dunked 30 motes into the conflux, "The Consecrated Mind is drawn to the overloaded conflux" will appear in the bottom left of the screen, and damage phase will start.</p>
                            </div>
                            <div>
                                <h2>Damage Phase</h2>
                                <p>After the gambit team have dunked 30 motes, and the message has appeared, the Boss will rapidly move to the glowing conflux. The conflux will vanish and the boss will open up, exposing many glowing eyes.</p>
                                <p>Everyone should move with the boss, and shoot out all of the eyes. When all of the eyes are destroyed, the Boss will become damageable, and their crit spot will open up in the center.</p>
                                <p>The boss will then quickly backpedal to the center of the arena. Keep in range of it and hit that DPS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}