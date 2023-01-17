import Link from "next/link"

function ClientSideRoute({ children, route } : { children: React.ReactNode, route:string}): JSX.Element {
    return <Link>{ children }</Link> 
}

export default ClientSideRoute