import Header from "../../components/Header"
import GlossaryBanner from "../../components/GlossaryBanner"
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html>
      <head />
      <body className="max-w-6xl mx-auto">
        <Header />
        <GlossaryBanner />
        {children}
        </body>
    </html>
  )
}
