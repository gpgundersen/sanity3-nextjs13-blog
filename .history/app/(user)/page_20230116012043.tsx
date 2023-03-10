import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import PreviewSuspense from "../../components/PreviewSuspense"

const query = groq`
    *[_type=='post']{
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`

export default async function Home() {
    if (previewData()) {
    return (<PreviewSuspense fallback={( 
        <div role="status">
            <p className=" text-center text-lg animate-pulse text-red-300">
                Loading Preview Data..
            </p>
        </div>
        )}>
        </PreviewSuspense>)
    }
    const posts = await client.fetch(query)
    return (
        <div>Not in preview mode</div>
    )
}