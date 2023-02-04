import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"
import Image from "next/image"
import urlFor from "../../../lib/urlFor"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../components/RichTextComponents"

type Props = {
    params: {
        slug: string,
    }
}

async function Author({params: { slug }}: Props) {
const query = groq `
*[__type == 'author' && clug.current == $slug] 
{
    "authorBio": bio[],
    "authorName": name,
    "mainImage": image,
    slug
}
`
}
export default function Page() {
    return <h1>About the author</h1>
}

