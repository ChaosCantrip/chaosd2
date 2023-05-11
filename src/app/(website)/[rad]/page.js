import RaidsPage from "./RaidsPage";
import DungeonsPage from "./DungeonsPage";
import {notFound} from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
    return [
        {
            rad: "raids"
        },
        {
            rad: "dungeons"
        }
    ]
}

export async function generateMetadata({ params }) {
    let title = "Guardians";
    if (params.rad === "raids") {
        title = "Raids";
    } else if (params.rad === "dungeons") {
        title = "Dungeons";
    }
    return {
        title: title,
        description: `Maps and guides for ${title} in Destiny 2.`,
        twitter: {
            card: 'summary',
            title: `${title} | chaosd2`,
            description: `Maps and guides for ${title} in Destiny 2.`,
            creator: '@chaosd2dev'
        },
        openGraph: {
            title: `${title} | chaosd2`,
            description: `Maps and guides for ${title} in Destiny 2.`,
        }
    }
}

export default function RaDPage({ params }) {
    if (params.rad === "raids") {
        return <RaidsPage/>
    } else if (params.rad === "dungeons") {
        return <DungeonsPage/>
    } else {
        notFound();
    }
}