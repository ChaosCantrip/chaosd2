import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Garden of Salvation",
}

export default function GardenOfSalvation() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Garden of Salvation"}/>
            <p>Page Under Construction</p>
        </div>
    )
}