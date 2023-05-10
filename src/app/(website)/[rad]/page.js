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
    let title = undefined;
    if (params.rad === "raids") {
        title = "Raids";
    } else if (params.rad === "dungeons") {
        title = "Dungeons";
    }
    return {
        title: title,
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