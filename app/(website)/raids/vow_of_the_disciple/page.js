import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";
import {BungieIcons} from "@/lib/BungieIcons"

export default function VowOfTheDisciple() {
    return (
        <div className={layout.page}>
            <Title title={"Vow of the Disciple"} icon_url={BungieIcons.raids.votd}/>
            <p>Page Under Construction</p>
        </div>
    )
}