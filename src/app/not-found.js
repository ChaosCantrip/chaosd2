import layout from "@/src/styles/modules/layout.module.css";
import Title from "@components/Title";

export default function NotFound() {
    return (
        <div className={layout.page}>
            <Title title="404 Not Found" show_back_button={false}/>
            <p>Page not found</p>
        </div>
    )
}