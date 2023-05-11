import {BungieIcons} from "@components/BungieIcons";
import BackgroundImage from "@components/BackgroundImage";
import layout from "@styles/modules/layout.module.css";
import {backgrounds} from "@components/ImageImports";
import Title from "@components/Title";
import {PathConfig} from "@components/PathConfig";

export const dynamicParams = false;

export async function generateStaticParams() {
    const params = [];
    for (const rad in PathConfig) {
        for (const activity in PathConfig[rad]) {
            params.push({
                rad: rad,
                activity: activity,
            });
        }
    }
    return params;
}

export default function ActivityLayout({ children, params }) {
    const { rad, activity } = params;
    const data = PathConfig[rad][activity];
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={backgrounds[activity]}/>
            <div className={layout.page}>
                <Title title={data.name} icon_url={BungieIcons[rad][activity]}/>
                {children}
            </div>
        </div>
    )
}