import layout from "@/src/styles/modules/title.module.css";
import BackButton from "@/src/lib/components/BackButton";

export default function Title({ title, subtitle = null, icon_url = null, show_back_button = true }) {
    return (
        <div className={layout.page_title_wrapper}>
            <div className={layout.back_title_wrapper}>
                {show_back_button && <BackButton subtitle={subtitle}/>}
                <h1 className={layout.page_title}>{title}</h1>
            </div>
            {icon_url && <img className={layout.page_title_icon} src={icon_url} alt={null}/>}
        </div>
    )
}