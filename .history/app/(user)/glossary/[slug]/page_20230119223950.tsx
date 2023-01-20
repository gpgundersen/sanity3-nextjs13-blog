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
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-blue-700 text-slate-500">
        <div className="relative min-h-56 flex flex-col md:flex-row">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image 
              className="object-cover object-center mx-auto"
              src={urlFor(glossary.image).url()}
              alt={glossary.term}
              fill
            />
          </div>
          <section className="p-5 bg-sky-900 w-full">
            <div>
              <div>
                <h1 className="text-3xl font-semibold">{glossary.current}</h1>
                <p>
                  {new Date(glossary._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })} 
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  )
}

export default Glossary