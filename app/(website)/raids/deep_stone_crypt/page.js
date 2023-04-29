import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Deep Stone Crypt",
}

export default function DeepStoneCrypt() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Deep Stone Crypt"}/>
            <p>Page Under Construction</p>
        </div>
    )
}