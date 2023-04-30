import backgrounds from "@/styles/modules/backgrounds.module.css";

export default function BackgroundWrapper({ background, children }) {
    return (
        <div className={`${backgrounds.wrapper} ${background}`}>
            {children}
        </div>
    )
}