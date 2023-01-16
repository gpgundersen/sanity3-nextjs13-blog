import NexusLogo from "./NexusLogo"

function Header() {
    return (
        <header className="flex items-center justify-between space-x-1 font-semibold px-24 py-5">
            <div>Wise Nexus Blog</div>
            <div>
               <NexusLogo />
            </div>  
        </header>
    )
}

export default Header