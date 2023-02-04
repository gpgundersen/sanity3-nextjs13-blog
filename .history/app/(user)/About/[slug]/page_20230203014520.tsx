import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../../lib/urlFor"
import NexusLogo from "../../../../components/NexusLogo"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../../components/RichTextComponents"

type Props = {
  params: {
  slug: string
 }
}

async function Author({ params: { slug } }: Props) {
  
const query = groq `
*[_type=='author' && slug.current == $slug][0]
{
        ...,
        name->,
        bio
    }
`;

const author: Author = await client.fetch(query, {slug});

    return <article>
      <section>
        <div>
          <div>
            {author.name}
          </div>
        </div>
      </section>
    </article>
    
    

  }

  export default Author


