
import Title from "@components/Title";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@styles/modules/layout.module.css";
import Background from "@backgrounds/home.jpg";

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
                    <h2>Hi, welcome to chaosd2!</h2>
                    <br/>
                    <p>I wanted to create a place to share raid guides and images in an easier way to access.</p>
                    <p>The whole website is built around the URLs being easy to use, such as just chaosd2.com/root/3 for Macrocosm, etc.</p>
                    <p>All images are also packed with metadata so Discord displays them nicely!</p>
                    <br/>
                    <p>Since the website is so new, I'm still working on making a lot of the images. I'll get around to them at some point!</p>
                    <p>Thanks for dropping by!</p>
                </div>
            </div>
        </div>
    )
}