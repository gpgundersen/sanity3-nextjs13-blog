import Header from "../../../components/Header"


import "styles/globals.css"

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html>
      <head />
      <body className="max-w-6xl mx-auto">
        <Header />

        {children}
        </body>
    </html>
  )
}
