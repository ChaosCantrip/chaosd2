import custom from "./custom.module.css";
import ImageHeader from "@image_components/ImageHeader";
import Image from "next/image";
import Background from "@backgrounds/kf.jpg";
import Diagram from "./map.png";

/* TODO: This is a placeholder page. */


export const metadata = {
    other: {
        width: 760,
        height: 1080,
    }
}

export default function KFMaze() {
    return (
        <body className={custom.body}>
            <Image src={Background} alt={""} className={custom.background}/>
            <div className={custom.main}>
                <ImageHeader title={"King's Fall"} subtitle={"Golgoroth's Cellar"} icon={undefined} href={"chaosd2.com/kf/maze"}/>
                <div className={custom.diagram}>
                    <div className={custom.image_wrapper}>
                        <Image src={Diagram} alt={""} className={custom.image}/>
                    </div>
                </div>
            </div>
        </body>
    );
}