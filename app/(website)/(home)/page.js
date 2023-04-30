import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";

export const metadata = {
    "title": "Home",
}

export default function HomePage(){
    return (
        <div className={layout.page}>
            <Title title={"Home"} show_back_button={false}/>
            <div className={layout.page_content}>
                <p>Website very much under construction</p>
            </div>
        </div>
    )
}