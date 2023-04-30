import layout from "@/styles/modules/title.module.css";

export default function Title({ title, icon_url = null }) {
    return (
        <div className={layout.page_title_wrapper}>
            <h1 className={layout.page_title}>{title}</h1>
            {icon_url && <img className={layout.page_title_icon} src={icon_url} alt={null}/>}
        </div>
    )
}