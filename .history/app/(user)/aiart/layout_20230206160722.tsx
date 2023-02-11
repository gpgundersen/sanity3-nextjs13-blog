import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

export default function AiArtLayout ({
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
                    <Footer />
                </body>
        </html>
    )
}