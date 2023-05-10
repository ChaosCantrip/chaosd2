
import Title from "@/lib/components/Title";
import BackgroundImage from "@/lib/components/BackgroundImage";
import layout from "@/styles/modules/layout.module.css";
import Background from "@/public/images/backgrounds/home.jpg";

export const metadata = {
    "title": "Home",
}

export default function HomePage(){
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <div className={layout.page}>
                <Title title={"Home"} show_back_button={false}/>
                <div className={layout.page_content}>
                    <p>Website very much under construction</p>
                </div>
            </div>
        </div>
    )
}