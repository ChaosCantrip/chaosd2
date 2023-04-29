import layout from "@/styles/modules/layout.module.css";
import BackButton from "@/lib/components/BackButton";

export default function TitleWithBack({ title, subtitle = null }) {
    return (
        <div className={layout.page_title_wrapper}>
            <BackButton subtitle={subtitle}/>
            <h1 className={layout.page_title}>{title}</h1>
        </div>
    )
}