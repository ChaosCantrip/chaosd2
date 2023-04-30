import TitleWithBack from "@/lib/components/TitleWithBack";
import layout from "@/styles/modules/layout.module.css";

export default function ActivityLayout({ title, icon_url = null, children }) {
    return (
        <div className={layout.page}>
            <TitleWithBack title={title} icon_url={icon_url}/>
            {children}
        </div>
    )
}