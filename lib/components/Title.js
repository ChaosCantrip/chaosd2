import layout from "@/styles/modules/layout.module.css";

export default function Title({ title }) {
    return (
        <div className={layout.page_title_wrapper}>
            <h1 className={layout.page_title}>{title}</h1>
        </div>
    )
}