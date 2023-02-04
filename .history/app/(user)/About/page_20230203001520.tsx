import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../lib/urlFor"
import NexusLogo from "../../../components/NexusLogo"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../components/RichTextComponents"

type Props = {
  params: {
  name: string
 }
}

async function Author({params:{name}}: Props) {
  
const query = groq `
*[_type=='author' && slug.current == $name][0]
{
        ...,
        name,
        bio
    }
`
    return  <div>About: {name}</div>;
  }

  export default Author


