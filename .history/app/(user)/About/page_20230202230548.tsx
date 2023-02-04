import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../lib/urlFor"
import NexusLogo from "../../../components/NexusLogo"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../components/RichTextComponents"

const query = groq `
*[_type=='author']{
        ...,
        name,
          image,
          bio
    }
`
export default function About() {
  
  
  return <p>About the Author</p>
}

