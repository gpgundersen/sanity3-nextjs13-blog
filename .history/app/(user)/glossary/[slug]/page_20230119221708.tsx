import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../../lib/urlFor"

type Props = {
  params: {
    slug: string;
  }
}

async function Glossary({params: { slug }}: Props) {
  const query = groq`
  *[_type=='glossary' && slug.current == $slug][0]
  {
    ...,
    term->,
  }
  `

  const glossary: Glossary = await client.fetch(query, { slug });

  return (
    <article>
      <section>
        <div>
          <div>
            <Image 
              className="object-cover object-center mx-auto"
              src={urlFor(glossary.image).url()}
              alt={glossary.term}
              fill
            />
          </div>
        </div>
      </section>
    </article>
  )
}

export default Glossary