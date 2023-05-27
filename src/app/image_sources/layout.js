import "@src/app/image_sources/image_sources.css";
import {notFound} from "next/navigation";
 
export default function RootLayout({ children }) {
    if (process.env.VERCEL_ENV === "development") {
        return (
            <html lang="en">
                <body>{children}</body>
            </html>
        )
    } else {
        notFound();
    }
}
