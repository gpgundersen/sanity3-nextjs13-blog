import FbIcon from "./FbIcon"

function Footer() {
    return <div className="text-center bg-slate-800 text-slate-200">
      <div className="container p-2">
        <div className="flex justify-end">
            <p>Like our</p><FbIcon />
        </div>
       <h6 className="font-serif text-slate-500">© wisenexus.net, 2023</h6>
      </div>
    </div>
}

export default Footer