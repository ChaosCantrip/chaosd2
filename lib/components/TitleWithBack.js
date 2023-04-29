import layout from "@/styles/modules/layout.module.css";
import BackButton from "@/lib/components/BackButton";

export default function TitleWithBack({ title }) {
    return (
        <div className={layout.page_title_wrapper}>
            <BackButton />
            <h1 className={layout.page_title}>{title}</h1>
        </div>
    )
}