import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../lib/urlFor"
import NexusLogo from "../../../components/NexusLogo"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../components/RichTextComponents"

type Props = {
  params: {
  author: string
 }
}

async function author({params:{author}}: Props) {
  
const query = groq `
*[_type=='author']{
        ...,
        name,
          image,
          bio[]
    }
`
    return <div>About: {author}</div>
  }

  export default author


