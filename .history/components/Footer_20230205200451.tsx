import FbIcon from "./FbIcon"
import NextJsIcon from "./NextJsIcon"
import SanityIcon from "./SanityIcon"
import TailwindIcon from "./TailwindIcon"

function Footer() {
    return <div className="bg-slate-800 text-slate-200">
      <div className="container flex flex-col flex-shrink p-3">
        <div className="flex justify-start">
            <p className="text-white m-2 font-light">Visit our</p><FbIcon />
        </div>
        <div className="flex flex-wrap justify-end space-x-6 space-y-2">
          <p className="text-sm">Powered by</p><NextJsIcon /><SanityIcon /><TailwindIcon /></div>
       <h6 className="font-serif text-slate-500 text-center mt-6">© wisenexus.net, 2023</h6>
      </div>
    </div>
}

export default Footer