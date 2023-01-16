import { previewData } from "next/headers"
import { groq } from "next-sanity"



export default function Home() {
    if (previewData()) {
    return <div>Preview Mode</div>
    }
    return (
        <div>Not in preview mode</div>
    )
}