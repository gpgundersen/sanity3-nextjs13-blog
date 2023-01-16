import Link from "next/link"
import { GlobeAltIcon } from "@heroicons/react/24/outline"

function StudioNavBar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-6">
                <Link href="/"><GlobeAltIcon className="h-5 w-5 text-[#1B9FFF] m-1"/></Link>
                <h4 className="text-[#1B9FFF] flex items-left">Go to website</h4>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavBar;