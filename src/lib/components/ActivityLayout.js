import Title from "@/src/lib/components/Title";
import layout from "@/src/styles/modules/layout.module.css";

export default function ActivityLayout({ title, icon_url = null, children }) {
    return (
        <div className={layout.page}>
            <Title title={title} icon_url={icon_url}/>
            {children}
        </div>
    )
}