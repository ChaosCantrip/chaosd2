import layout from "@/styles/modules/layout.module.css";
import Title from "@/lib/components/Title";

export default function ReferencePage() {
    return (
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
                That would take you to the page for the encounter, but to make it even easier to link images into Discord,
                I made it so that you can just add <code>/img</code> or <code>/i</code>to the end of the link, and it will
                automatically redirect you to the image, like so: <a href={"/root/3/img"}>https://chaosd2.com/root/3/img</a>.
            </p>
            <p>
                Do note for Discord, the https:// is required, otherwise it will not embed the image. Just how discord works I'm afraid.
            </p>
        </div>
    )
}