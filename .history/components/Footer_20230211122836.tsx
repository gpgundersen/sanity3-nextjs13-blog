import FbIcon from "./FbIcon"
import NextJsIcon from "./NextJsIcon"
import SanityIcon from "./SanityIcon"
import TailwindIcon from "./TailwindIcon"
import Link from "next/link"

function Footer() {
    return <div className="bg-slate-800 text-slate-200">
        <div className="flex items-center justify-between space-x-5 space-y-2 p-1">
          <ul className="text-xl m-1 p-1">
          <li><Link href="/" className="">Home</Link></li>
          <li><Link href="/about/wise-phil" className="">About</Link></li>
          </ul>
          <ul className="">
            <li className="text-sm font-thin">Powered by</li>
            <li><NextJsIcon /></li>
            <li><SanityIcon /></li>
            <li className="mt-2.5"><TailwindIcon /></li>
          </ul>
          </div>
          <div className="flex justify-center p-2 bg-slate-700">
            <p className="text-white m-1 font-light">Visit our</p><FbIcon />
        </div>
       <h6 className="font-serif text-slate-500 text-center mt-1">© wisenexus.net, 2023</h6>
    </div>
}

export default Footer