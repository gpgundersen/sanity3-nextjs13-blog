import NexusLogo from "./NexusLogo"

function Header() {
    return (
        <header className="flex items-center justify-start space-x-1 font-bold px-10 py-4">
            <div>
               <NexusLogo />
            </div>
            <div>Wise Nexus Blog</div>  
        </header>
    )
}

export default Header