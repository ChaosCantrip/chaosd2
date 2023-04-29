import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Last Wish",
}

export default function LastWish() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Last Wish"}/>
            <p>Page Under Construction</p>
        </div>
    )
}