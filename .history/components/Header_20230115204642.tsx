import NexusLogo from "./NexusLogo"

function Header() {
    return (
        <header className="flex items-center justify-end space-x-1 font-bold px-7 py-4">
            <div><a href='/'>Wise nexus</a></div> 
            <div>
               <NexusLogo />
            </div>
        </header>
    )
}

export default Header