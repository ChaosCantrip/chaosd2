import layout from "@styles/modules/layout.module.css";
import styles from "./socials.module.css";
import BackgroundImage from "@components/BackgroundImage";
import Background from "@backgrounds/home.jpg";
import Title from "@components/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faReddit, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function SocialsPage() {
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={Background}/>
            <div className={layout.page}>
                <Title title="Socials" show_back_button={false}/>
                <p>Feel free to check me out or contact me on any of the platforms below!</p>
                <div className={styles.grid}>
                    <GridItem name="Twitter" href={"https://twitter.com/chaosd2dev"} icon={faTwitter}/>
                    <GridItem name="Reddit" href={"https://www.reddit.com/user/chaosd2"} icon={faReddit}/>
                    <GridItem name="GitHub" href={"https://github.com/ChaosCantrip"} icon={faGithub}/>
                    <GridItem name="Email" href={"mailto:dev@chaosd2.com"} icon={faEnvelope}/>
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