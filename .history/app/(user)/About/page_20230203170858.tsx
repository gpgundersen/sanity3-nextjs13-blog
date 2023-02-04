import { groq } from "next-sanity"
// import { client } from "../../../lib/sanity.client"
import urlFor from "../../../lib/urlFor"


const query = groq `
*[__type == 'author'] {
    "authorBio": bio[],
    "authorName": name,
    "mainImage": image,
}
`

export default function Page() {
    return <h1>About the author</h1>
}

