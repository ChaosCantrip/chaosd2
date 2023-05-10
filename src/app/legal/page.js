import layout from '@/src/styles/modules/layout.module.css';
import Title from "@components/Title";

export default function LegalPage() {
    return (
        <div className={layout.page}>
            <Title title={"The Legal Stuff"} show_back_button={false}/>
            <p>idk much about legal stuff I'm just some dude</p>
            <p>I'm not associated with Destiny 2 or Bungie in any way</p>
            <p>I'm just a fan of the game that wanted to put together an easy way to find maps for encounters and stuff</p>
            <p>The main purpose of the site is just the quick links system</p>
            <p>Please don't sue me lmfao</p>
            <p>If you have a problem with something on the page, please just contact me at <a href="mailto:dev@chaoscantrip.com">dev@chaoscantrip.com</a>, and I'll do my best to accomodate.</p>
            <p>I'm in the process of remaking these maps on my own, but in the meantime I just put up the ones everyone was using</p>
            <p>Thanks for reading!</p>
        </div>
    )
}