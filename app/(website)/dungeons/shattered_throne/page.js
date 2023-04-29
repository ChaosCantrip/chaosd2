import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Shattered Throne",
}

export default function ShatteredThrone() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Shattered Throne"}/>
            <p>Page Under Construction</p>
        </div>
    )
}