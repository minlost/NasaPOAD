import "../app/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

type LayoutProps = {
  children: React.ReactNode
}
import { Roboto } from "@next/font/google"
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        /> */}
      {/* </head> */}

      <body className={`${roboto.className} `}>
        <div className="bg-gradient-to-r from-blue-400 via-slate-900 to-slate-500 overflow-hidden 	">
          <Navbar />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
