import NexusLogo from "./NexusLogo"

function Header() {
    return (
        <header className="flex items-center justify-between space-x-1 font-semibold px-11 py-5">
            <div>
                <svg width="50" height="50" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20" fill="#1B9FFF"/>
                    <rect x="15" y="15" width="20" height="20" fill="white"/>
                    <path d="M 25 10 L 25 40" stroke="white" stroke-width="4"/>
                    <path d="M 10 25 L 40 25" stroke="white" stroke-width="4"/>
                </svg>
            </div>

            <div></div>
        </header>
    )
}

export default Header