import layout from "@styles/modules/layout.module.css";
import BackgroundImage from "@components/BackgroundImage";
import Background from "@backgrounds/home.jpg";
import Title from "@components/Title";
import styles from "./support.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faReddit, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function SupportPage(){
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <div className={layout.page}>
                <Title title={"Help keep chaosd2 alive!"} show_back_button={false}/>
                <div className={layout.page_content}>
                    <div className={styles.top}>
                        <div className={styles.text}>
                            <p>
                                chaosd2 is a passion project I created to try and make it easier to share guides and
                                maps for Destiny 2. I'm not a professional graphic designer, but I try my best to make
                                the images look good and be easy to understand. I'm always looking for feedback on how
                                to improve the website, so if you have any suggestions, please let me know!
                            </p>
                            <p>
                                I work on the website in my spare time, so it's not always easy to find the time to
                                work on it. If you'd like to support the website, you can do so by donating! This will
                                help me pay for the hosting costs of the website, and any extra will go towards development
                                and creating new images.
                            </p>
                            <p>
                                Thank you for your support!
                            </p>
                        </div>
                        <div className={styles.link}>
                            <p>If you'd like to support the website, you can do so by donating and help me to keep the lights on. You have no idea how much I appreciate it!</p>
                            <a href="https://donate.stripe.com/bIY8xC4c1ezmc806oo" target="_blank" rel="noopener noreferrer" className={styles.button}>Click here to donate!</a>
                        </div>
                    </div>
                    <div>

                        <p>Feel free to check me out or contact me on any of the platforms below!</p>
                        <div className={styles.grid}>
                            <GridItem name="Twitter" href={"https://twitter.com/chaosd2dev"} icon={faTwitter}/>
                            <GridItem name="Reddit" href={"https://www.reddit.com/user/chaosd2"} icon={faReddit}/>
                            <GridItem name="GitHub" href={"https://github.com/ChaosCantrip"} icon={faGithub}/>
                            <GridItem name="Email" href={"mailto:dev@chaosd2.com"} icon={faEnvelope}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function GridItem({ name, icon, href, subtitle }) {
    return (
        <a className={styles.wrapper} href={href} target="_blank" rel="noreferrer noopener">
            <div className={styles.item}>
                <FontAwesomeIcon icon={icon} className={styles.icon}/>
                <p className={styles.name}>{name}</p>
                {(subtitle) ? <p className={styles.subtitle}>({subtitle})</p> : null}
            </div>
        </a>
    )
}