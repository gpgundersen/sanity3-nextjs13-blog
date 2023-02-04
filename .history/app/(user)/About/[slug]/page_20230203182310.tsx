import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import Image from "next/image"
import urlFor from "../../../../lib/urlFor"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../../components/RichTextComponents"

type Props = {
    params: {
        slug: string;
    }
}

export const revalidate = 1800;

export async function generateStaticParams() {
    const query = groq`*[_type=='author']
    {
        slug
    }`;
    const slugs: Author[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map(slug => ({
        slug,
    }));
}

async function Author({params: { slug }}: Props) {
    const query = groq`
    *[_type=='author' ]
    {
        ...,
        image
    }
    `

const author: Author = await client.fetch(query, { slug });

return (
    <article className="px-10 pb-28">
        <section className="space-y-2 border border-slate-500 text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row">
            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                <Image 
                    className="object-cover object-center mx-auto"
                    src={urlFor(author.image).url()}
                    alt={author.name}
                    fill
                />
            </div>
            <section className="p-5 bg-sky-900 w-full">
                <div className="flex flex-col md:flex-row justify-between gap-y-5">
                <div>
                    <h1 className="text-3xl font-semibold">{author.name}</h1>
                    <Image
                        className=""
                        src={urlFor(author.image).url()}
                        alt={author.name}
                        width={54}
                        height={54}
                    />
                </div>
                </div>
            </section>
            </div>
        </section>
    </article>
)
}
export default Author

