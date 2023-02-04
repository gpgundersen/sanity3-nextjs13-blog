import { groq } from "next-sanity"
// import { client } from "../../../lib/sanity.client"
import urlFor from "../../../lib/urlFor"

export default function Page() {
    return <h1>About the author</h1>
}

const query = groq `
*[__type == 'author']{
    ...,
    name,
    bio[]
}

`