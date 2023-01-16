import NexusLogo from "./NexusLogo"

function Header() {
    return (
        <header className="flex items-center justify-end space-x-1 font-bold px-7 py-5">
            <div>
               <NexusLogo />
            </div>
            <div>Wise Nexus Blog</div>  
        </header>
    )
}

export default Header