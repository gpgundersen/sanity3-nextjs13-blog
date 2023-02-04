import NexusLogo from "./NexusLogo"
import Link from "next/link"

function Header() {
    return (
        <header className="flex items-center justify-end space-x-1 font-bold px-7 py-4">
            <div><Link href="/">Home</Link></div>
            <div><Link href="/about/?slug=1">About</Link></div>
            <div>
               <NexusLogo />
            </div>
        </header>
    )
}

export default Header