import Header from "@/app/(website)/Header";
import Footer from "@/app/(website)/Footer";
import "@/styles/global/master.css";

export const metadata = {
  title: {
      template: "%s | ChaosCantrip",
      default: "ChaosCantrip"
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
      </body>
    </html>
  )
}
