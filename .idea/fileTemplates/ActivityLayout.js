import {BungieIcons} from "@/lib/BungieIcons";
import ActivityLayout from "@/lib/components/ActivityLayout";

export const metadata = {
    "title": "${TITLE}"
}

export default function ${LAYOUT_NAME}Layout({ children }) {
    return <ActivityLayout title={"${TITLE}"} icon_url={BungieIcons.${ICON}}>{children}</ActivityLayout>
}