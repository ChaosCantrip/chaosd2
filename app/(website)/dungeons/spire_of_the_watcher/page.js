import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Spire of the Watcher",
}

export default function SpireOfTheWatcher() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Spire of the Watcher"}/>
            <p>Page Under Construction</p>
        </div>
    )
}