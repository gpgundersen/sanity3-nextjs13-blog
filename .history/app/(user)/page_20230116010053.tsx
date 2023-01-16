import { previewData } from "next/headers"
import { groq } from "next-sanity"

const query = groq`
    *[_type=='post']{
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`

export default function Home() {
    if (previewData()) {
    return <div>Preview Mode</div>
    }
    return (
        <div>Not in preview mode</div>
    )
}