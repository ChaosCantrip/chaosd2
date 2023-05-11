import { config } from '@fortawesome/fontawesome-svg-core'
import { Analytics } from "@vercel/analytics/react";
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Header from "@components/Header";
import Footer from "@components/Footer";
import "@styles/global/master.css";

export const metadata = {
    generator: "Next.js",
    applicationName: "chaosd2",
    metadataBase: new URL("https://chaosd2.com"),
    title: {
        template: "%s | chaosd2",
        default: "chaosd2"
    },
    description: "A Destiny 2 website for the community.",
    keywords: ["Destiny", "Bungie", "Destiny 2", "Raid", "Dungeon", "Encounter", "Map", "Loot"],
    authors: [
        { name: "ChaosCantrip", url: "https://chaosd2.com/" }
    ],
    creator: "ChaosCantrip",
    publisher: "ChaosCantrip",
    colorScheme: "dark",
    twitter: {
        card: "summary",
        site: "@chaosd2dev",
        creator: "@chaosd2dev",
    },
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://chaosd2.com/",
        site_name: "chaosd2",
        description: "A Destiny 2 website for the community.",
    }
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
