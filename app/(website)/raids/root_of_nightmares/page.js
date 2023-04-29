import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Root of Nightmares",
}

export default function RootOfNightmares() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Root of Nightmares"}/>
            <p>Page Under Construction</p>
        </div>
    )
}