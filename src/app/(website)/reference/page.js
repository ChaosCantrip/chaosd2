import Title from "@components/Title";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@styles/modules/layout.module.css";
import Background from "@backgrounds/home.jpg";

export default function ReferencePage() {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <div className={layout.page}>
                <Title title="Reference" show_back_button={false}/>
                <p>Page Under Construction</p>
                <p>
                    I made this site to make it easier to link images into Discord and other text apps, or to find images
                    should you need them.
                </p>
                <p>
                    To this end, I tried to make the system easy to use.
                </p>
                <p>
                    All quick links follow the same format: <code>https://chaosd2.com/[activity]/[encounter]</code>
                </p>
                <p>
                    Say you wanted to link the map for Encounter 3 of Root of Nightmares. Just put <code>root</code> or <code>ron</code> for the activity, and <code>3</code> for the encounter. The link would be: <a href={"/root/3"}>chaosd2.com/root/3</a>.
                </p>
                <p>
                    Do note for Discord, the https:// is required, otherwise it will not embed the image. Just how discord works I'm afraid.
                </p>
            </div>
        </div>
    )
}