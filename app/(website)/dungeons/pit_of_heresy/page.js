import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Pit of Heresy",
}

export default function PitOfHeresy() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Pit of Heresy"}/>
            <p>Page Under Construction</p>
        </div>
    )
}