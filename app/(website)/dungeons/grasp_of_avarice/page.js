import layout from "@/styles/modules/layout.module.css";
import TitleWithBack from "@/lib/components/TitleWithBack";

export const metadata = {
    "title": "Grasp of Avarice",
}

export default function GraspOfAvarice() {
    return (
        <div className={layout.page}>
            <TitleWithBack title={"Grasp of Avarice"}/>
            <p>Page Under Construction</p>
        </div>
    )
}