import layout from "@/styles/modules/layout.module.css";

export const metadata = {
    "title": "Home",
}

export default function HomePage(){
    return (
        <div className={layout.page}>
            <h1 className={layout.page_title}>Home Page</h1>
        </div>
    )
}