import NexusLogo from "./NexusLogo"
import Link from "next/link"

function Header() {
    return (
        <header className="flex items-center justify-end space-x-1 font-bold px-7 py-4 bg-indigo-50">
            <div className="flex items-center justify-end space-x-4 mx-4 text-blue-900 drop-shadow-sm">
            <div className="hover:text-blue-500"><Link href="/">Home</Link></div>
            <div className="hover:text-blue-500"><Link href="/about/wise-phil">About</Link></div>
            </div>
            <div className="drop-shadow-lg">
               <NexusLogo />
            </div>
        </header>
    )
}

export default Header