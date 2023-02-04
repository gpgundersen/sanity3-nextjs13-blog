import { groq } from "next-sanity"
// import { client } from "../../../lib/sanity.client"
import urlFor from "../../../lib/urlFor"

export default function Page() {
    return <h1>{authorName}</h1>
}

const query = groq `
*[__type == 'author'].author {
    "authorBio": bio[],
    "authorName": name,
    "mainImage": image,
}
`


