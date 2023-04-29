import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "King's Fall",
}

export default function KingsFall() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"King's Fall"}/>
            <p>Page Under Construction</p>
        </div>
    )
}