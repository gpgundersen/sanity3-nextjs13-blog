import NexusLogo from "./NexusLogo"

function Header() {
    return (
        <header className="flex items-center justify-end space-x-1 font-bold px-10 py-5">
            <div>Wise Nexus Blog</div>
            <div>
               <NexusLogo />
            </div>  
        </header>
    )
}

export default Header