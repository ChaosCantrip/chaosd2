import { config } from '@fortawesome/fontawesome-svg-core'
import { Analytics } from "@vercel/analytics/react";
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Header from "@/app/(website)/Header";
import Footer from "@/app/(website)/Footer";
import "@styles/global/master.css";

export const metadata = {
    title: {
        template: "%s | chaosd2",
        default: "chaosd2"
    },
    description: "A Destiny 2 website for the community.",
    keywords: ["Destiny", "Bungie", "Destiny 2", "Raid", "Dungeon", "Encounter", "Map", "Loot"],
    authors: [
        { name: "ChaosCantrip", url: "https://chaosd2.com/" }
    ]
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
