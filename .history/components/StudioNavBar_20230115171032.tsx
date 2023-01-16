import Link from "next/link"
import { GlobeAltIcon } from "@heroicons/react/24/outline"

function StudioNavBar(props: any): JSX.Element {
    return (
        <div>
            <div>
                <Link href="/" className="text-[#1B9FFF] flex items-center">Go to Web Home</Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavBar;