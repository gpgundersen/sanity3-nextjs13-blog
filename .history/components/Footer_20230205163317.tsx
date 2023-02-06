import FbIcon from "./FbIcon"
import NextJsIcon from "./NextJsIcon"
import SanityIcon from "./SanityIcon"

function Footer() {
    return <div className="bg-slate-800 text-slate-200">
      <div className="container p-3">
        <div className="flex justify-start">
            <p className="text-white m-2 font-light">Visit our</p><FbIcon />
        </div>
        <div className="flex justify-end pr-3"><NextJsIcon /> <SanityIcon /></div>
       <h6 className="font-serif text-slate-500 text-center">© wisenexus.net, 2023</h6>
      </div>
    </div>
}

export default Footer