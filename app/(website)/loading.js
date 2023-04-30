import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";

export default function Loading() {
    return (
        <div className={layout.page}>
            <Title title="Loading..." show_back_button={false}/>
        </div>
    )
}