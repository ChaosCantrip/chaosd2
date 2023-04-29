import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Prophecy",
}

export default function Prophecy() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Prophecy"}/>
            <p>Page Under Construction</p>
        </div>
    )
}