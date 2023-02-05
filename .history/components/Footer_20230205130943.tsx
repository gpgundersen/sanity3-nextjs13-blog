import FbIcon from "./FbIcon"

function Footer() {
    return <div className="text-center bg-slate-800 text-slate-200">
      <div className="container p-3">
        <div className="m-2">
            <p className="text-white m-2 font-light">Visit our<FbIcon /></p>
        </div>
       <h6 className="font-serif text-slate-500">© wisenexus.net, 2023</h6>
      </div>
    </div>
}

export default Footer