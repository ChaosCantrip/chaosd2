import Title from "@/lib/components/Title";
import layout from "@/styles/modules/layout.module.css";

export default function ActivityLayout({ title, icon_url = null, children }) {
    return (
        <div className={layout.page}>
            <Title title={title} icon_url={icon_url}/>
            {children}
        </div>
    )
}