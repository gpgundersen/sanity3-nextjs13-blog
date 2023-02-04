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
const query = groq `
*[_type=='author' 
{
        ...,
        name,
        bio
    }
`

function Author(){
  

    return (
      <div>
      <Author />
      </div> 
      )
  }

  export default Author


