import { groq } from "next-sanity"
import { client } from "../../../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../../../lib/urlFor"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../../../components/RichTextComponents"

type Props = {
    params: {
        slug: string,
    }
}

export const revalidate = 14400;

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
    *[_type=='glossary' && slug.current == $slug][0]
    {
        ...,

    }
    `
      const glossary: Glossary = await client.fetch(query, { slug })

      return (
        <article className="px-12 pb-28 max-w-4xl mr-auto">
            <section className="space-y-2 border border-slate-500 text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                <Image
                    className="object-cover object-center mx-auto"
                    src={urlFor(glossary.image).url()}
                    alt={glossary.term}
                    fill
                    />
            </div>

        <section className="p-5 bg-slate-500 w-full">
            <div className="flex flex-col md:flex-row  justify-between">
            <div>
                <h1 className="text-4xl font-extrabold">{glossary.term}</h1>

                <p className="font-serif font-normal">
                    {new Date(glossary._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
                </p>
            </div> 
            <div className="w-64">
                <h3 className="text-sm font-thin">{glossary.term}</h3>
                <div>
                    {/*TODO Author BIO*/}
                </div>
            </div>
            </div>
        </section>

            </div>
        </section>
            <div className="max-w-3xl ml-auto mt-5 font-light first-letter:font-serif first-letter:text-3xl first-letter:text-sky-700 first-letter:font-semibold" >
        <PortableText value={glossary.definition} components={RichTextComponents}/>
            </div>
        </article>
    )
}

export default Glossary
