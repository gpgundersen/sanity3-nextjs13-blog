import FbIcon from "./FbIcon"
import NextJsIcon from "./NextJsIcon"
import SanityIcon from "./SanityIcon"
import TailwindIcon from "./TailwindIcon"
import Link from "next/link"

function Footer() {
    return <div className="bg-slate-800 text-slate-200">
      <div className="container flex flex-col p-1">
        <div className="flex justify-end p-2 mr-7ver">
            <p className="text-white m-2 font-light">Visit our</p><FbIcon />
        </div>
        <div className="fixed w-20 flex flex-col justify-between items-start">
        <Link href="/">Home</Link>
        <Link href="/about/wise-phil">About</Link>
        </div>
        <div className="flex flex-wrap justify-end space-x-5 space-y-2">
          <p className="text-sm">Powered by</p>
          <ul>
            <li><NextJsIcon /></li>
            <li><SanityIcon /></li>
            <li className="mt-2.5"><TailwindIcon /></li>
          </ul>
          </div>
          </div>
       <h6 className="font-serif text-slate-500 text-center mt-6">© wisenexus.net, 2023</h6>
    </div>
}

export default Footer