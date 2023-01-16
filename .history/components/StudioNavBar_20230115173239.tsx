import Link from "next/link"
import { GlobeAltIcon } from "@heroicons/react/24/outline"

function StudioNavBar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-6">
                <Link href="/" className="text-[#1B9FFF] flex items-center"><GlobeAltIcon className="h-5 w-5 text-[#1B9FFF] m-1"/>
                    Go to Web Home
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavBar;