import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Vow of the Disciple",
}

export default function VowOfTheDisciple() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Vow of the Disciple"}/>
            <p>Page Under Construction</p>
        </div>
    )
}