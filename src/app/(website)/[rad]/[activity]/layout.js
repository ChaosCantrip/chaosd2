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

export async function generateMetadata({ params }) {
    const { rad, activity } = params;
    const data = PathConfig[rad][activity];
    return {
        title: data.name,
        description: `Maps and guides for ${data.name} in Destiny 2.`,
        twitter: {
            card: 'summary',
            title: `${data.name} | chaosd2`,
            description: `Maps and guides for ${data.name} in Destiny 2.`,
            creator: '@chaosd2dev'
        },
        openGraph: {
            title: `${data.name} | chaosd2`,
            description: `Maps and guides for ${data.name} in Destiny 2.`,
        }
    };
}

export default function ActivityLayout({ children, params }) {
    const { rad, activity } = params;
    const data = PathConfig[rad][activity];
    return (
        <div className={layout.page_wrapper}>
            <BackgroundImage src={backgrounds[activity]}/>
            {children}
        </div>
    )
}