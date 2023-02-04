import { groq } from "next-sanity"
// import { client } from "../../../lib/sanity.client"
import urlFor from "../../../lib/urlFor"
import { PortableText } from "@portabletext/react"

async function Author({params: { slug }})
const query = groq `
*[__type == 'author'] {
    "authorBio": bio[],
    "authorName": name,
    "mainImage": image,
    slug
}
`

export default function Page() {
    return <h1>About the author</h1>
}

