import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"



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

  return <div>Glossary: {slug}</div>
}

export default Glossary