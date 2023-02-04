import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../lib/urlFor"
import NexusLogo from "../../../components/NexusLogo"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../components/RichTextComponents"

type Props = {
  author: Author
}
const query = groq `
*[_type=='author']{
        ...,
        name,
          image,
          bio
    }
`
const Author: React.FC<Props> =({author}) => {
  return ( <article>
    <section>
      <div>
        <h1>{author.name}</h1>
        
        <PortableText value={author.bio}/>
      </div>
    </section>
  </article> );
}

