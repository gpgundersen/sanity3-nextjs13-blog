import NexusLogo from "./NexusLogo"
import Link from "next/link"

function Header() {
    return (
        <header className="flex items-center justify-end space-x-1 font-bold px-7 py-4 bg-gradient-to-r from-orange-500 via-orange-300 to-orange-50">
            <div className="flex items-center justify-end space-x-4 mx-4 text-blue-900 drop-shadow-sm">
                <div className="hover:[#2C346F]"><Link href="/">Home</Link></div>
                <div className="hover:[#2C346F]"><Link href="/about/wise-phil">About</Link></div>
            </div>
                <div className="drop-shadow-lg">
                <NexusLogo />
                </div>
        </header>
    )
}

export default Header