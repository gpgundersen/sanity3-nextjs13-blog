import NexusLogo from "./NexusLogo"

function Header() {
    return (
        <header className="flex items-center justify-end space-x-1 font-bold px-7 py-4">
            <div><a href='/'>Home</a></div>
            <div><a href='/about'>About</a></div>
            <div>
               <NexusLogo />
            </div>
        </header>
    )
}

export default Header