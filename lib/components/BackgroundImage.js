import Image from "next/image";
import layout from "@/styles/modules/layout.module.css";

export default function BackgroundImage({ src }) {
    return (
        <Image src={src} alt={""} className={layout.background} placeholder="blur" priority={true} quality={20}/>
    )
}