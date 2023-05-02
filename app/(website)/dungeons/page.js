import Link from "next/link";
import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import { BungieIcons } from "@/lib/BungieIcons";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";
import ActivityGridItem from "@/lib/components/ActivityGridItem";

import SpireOfTheWatcher from "@/public/images/backgrounds/spire.jpg";
import Duality from "@/public/images/backgrounds/duality.jpg";
import GraspOfAvarice from "@/public/images/backgrounds/grasp.jpg";
import Prophecy from "@/public/images/backgrounds/prophecy.jpg";
import PitOfHeresy from "@/public/images/backgrounds/pit.jpg";
import ShatteredThrone from "@/public/images/backgrounds/st.jpg";

export const metadata = {
    "title": "Dungeons",
}

/*
Spire of the Watcher
Duality
Grasp of Avarice
Prophecy
Pit of Heresy
Shattered Throne
 */

export default function DungeonsPage() {
    return (
        <BackgroundWrapper background={backgrounds.dungeon}>
            <div className={layout.page}>
                <Title title={"Dungeons"} icon_url={BungieIcons.dungeon_icon} show_back_button={false}/>
                <div className={layout.page_content}>
                    <div className={layout.activity_grid}>
                        <ActivityGridItem href={"/dungeons/spire_of_the_watcher"} name={"Spire of the Watcher"} icon={BungieIcons.dungeons.sotw} banner={SpireOfTheWatcher} description={"Machinations run wild in this dust-ridden ruin. Bring them to heel."}/>
                        <ActivityGridItem href={"/dungeons/duality"} name={"Duality"} icon={BungieIcons.dungeons.duality} banner={Duality} description={"Dive into the depths of the exiled emperor's mind in search of dark secrets."}/>
                        <ActivityGridItem href={"/dungeons/grasp_of_avarice"} name={"Grasp of Avarice"} icon={BungieIcons.dungeons.goa} banner={GraspOfAvarice} description={"A cautionary tale for adventurers willing to trade their humanity for riches."}/>
                        <ActivityGridItem href={"/dungeons/prophecy"} name={"Prophecy"} icon={BungieIcons.dungeons.prophecy} banner={Prophecy} description={"Enter the realm of the Nine and ask the question: \"What is the nature of the Darkness?\""}/>
                        <ActivityGridItem href={"/dungeons/pit_of_heresy"} name={"Pit of Heresy"} icon={BungieIcons.dungeons.poh} banner={PitOfHeresy} description={"Deep beneath Sorrow's Harbor, the Hive keep their darkest secrets."}/>
                        <ActivityGridItem href={"/dungeons/shattered_throne"} name={"Shattered Throne"} icon={BungieIcons.dungeons.st} banner={ShatteredThrone} description={"Strike back at the curse that plagues the Dreaming City."}/>
                    </div>
                </div>
            </div>
        </BackgroundWrapper>
    )
}