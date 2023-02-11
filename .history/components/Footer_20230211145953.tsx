import FbIcon from "./FbIcon"
import NextJsIcon from "./NextJsIcon"
import SanityIcon from "./SanityIcon"
import TailwindIcon from "./TailwindIcon"
import Link from "next/link"

function Footer() {
    return <div className="bg-slate-900 text-slate-200">
        <div className="flex items-center justify-between space-x-5 space-y-2 p-1">
          <ul className="font-light text-xl m-2 p-2">
            <li className="text-sm font-thin underline decoration-black mb-2">Navigation</li>
            <li><Link href="/" className="hover:bg-black">Home</Link></li>
            <li><Link href="/about/wise-phil" className="hover:bg-black">About</Link></li>
          </ul>
          <ul className="p-1">
            <li className="text-sm font-thin underline decoration-black">Powered by</li>
            <li><NextJsIcon /></li>
            <li><SanityIcon /></li>
            <li className="mt-2.5"><TailwindIcon /></li>
          </ul>
          </div>
          <div className="flex justify-center bg-gradient-to-b from-slate-900 via-gray-900 to-black">
            <p className="text-white m-1 font-light">Visit our</p><FbIcon />
        </div>
       <h6 className="font-serif text-slate-600 text-center bg-black mt-1">© wisenexus.net, 2023</h6>
       </div>
}

export default Footer