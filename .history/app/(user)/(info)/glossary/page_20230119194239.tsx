import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../../lib/urlFor"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../../components/RichTextComponents"


type Props = {
  params: {
    slug:string,
  }
}

export async function generateStaticParams() {
  const query = groq`*[_type=='glossary']
  {
    slug
  }`;
  const slugs: Glossary[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map(slug => ({
    slug,
  }));
}

async function Glossary({params: { slug }}: Props) {
  const query = groq`
  *[_type=='glossary'] && slug.current == $slug][0]
  {
    ...,
    term->,

  }
  `


const glossary: Glossary = await client.fetch(query, { slug })

return (
  <article>
    <div>
    <Image
                    className="object-cover object-center mx-auto"
                    src={urlFor(glossary.image).url()}
                    alt={glossary.term}
                    fill
                    />
    </div>
    <div>
      <PortableText value={glossary.description} components={RichTextComponents}/>
    </div>
  </article>
)
}

export default Glossary