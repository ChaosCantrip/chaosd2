import Link from "next/link";
import Title from "@/lib/components/Title";

import layout from "@/styles/modules/layout.module.css";
import {BungieIcons} from "@/lib/BungieIcons";
import BackgroundWrapper from "@/lib/components/BackgroundWrapper";
import backgrounds from "@/styles/modules/backgrounds.module.css";
import ActivityGridItem from "@/lib/components/ActivityGridItem";

import RootOfNightmares from "@/public/images/backgrounds/root.jpg";
import KingsFall from "@/public/images/backgrounds/kf.jpg";
import VowOfTheDisciple from "@/public/images/backgrounds/vow.jpg";
import VaultOfGlass from "@/public/images/backgrounds/vog.jpg";
import DeepStoneCrypt from "@/public/images/backgrounds/dsc.jpg";
import GardenOfSalvation from "@/public/images/backgrounds/garden.jpg";
import LastWish from "@/public/images/backgrounds/last_wish.jpg";

export const metadata = {
    "title": "Raids",
}

/*
Root of Nightmares
King's Fall
Vow of the Disciple
Vault of Glass
Deep Stone Crypt
Garden of Salvation
Last Wish
 */

export default function Raids() {
    return (
        <BackgroundWrapper background={backgrounds.raid}>
            <div className={layout.page}>
                <Title title={"Raids"} icon_url={BungieIcons.raid_icon} show_back_button={false}/>
                <div className={layout.page_content}>
                    <div className={layout.activity_grid}>
                        <ActivityGridItem href={"/raids/root_of_nightmares"} name={"Root of Nightmares"} icon={BungieIcons.raids.ron} banner={RootOfNightmares} description={"A sinister threat has taken root."}/>
                        <ActivityGridItem href={"/raids/kings_fall"} name={"King's Fall"} icon={BungieIcons.raids.kf} banner={KingsFall} description={"Long live the King."}/>
                        <ActivityGridItem href={"/raids/vow_of_the_disciple"} name={"Vow of the Disciple"} icon={BungieIcons.raids.votd} banner={VowOfTheDisciple} description={"The Disciple beckons."}/>
                        <ActivityGridItem href={"/raids/vault_of_glass"} name={"Vault of Glass"} icon={BungieIcons.raids.vog} banner={VaultOfGlass} description={"Beneath Venus, evil stirs."}/>
                        <ActivityGridItem href={"/raids/deep_stone_crypt"} name={"Deep Stone Crypt"} icon={BungieIcons.raids.dsc} banner={DeepStoneCrypt} description={"The chains of legacy must be broken."}/>
                        <ActivityGridItem href={"/raids/garden_of_salvation"} name={"Garden of Salvation"} icon={BungieIcons.raids.gos} banner={GardenOfSalvation} description={"The Garden calls out to you."}/>
                        <ActivityGridItem href={"/raids/last_wish"} name={"Last Wish"} icon={BungieIcons.raids.lw} banner={LastWish} description={"The opportunity of a lifetime."}/>
                    </div>
                </div>
            </div>
        </BackgroundWrapper>
    )
}