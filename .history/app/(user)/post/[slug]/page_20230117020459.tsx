import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../../lib/urlFor"
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../../components/RichTextComponents"

type Props = {
    params: {
        slug: string,
    }
}

async function Post({params: { slug }}: Props) {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `

    const post: Post = await client.fetch(query, { slug })

    return (
        <article className="px-12 pb-28 max-w-4xl mr-auto">
            <section className="space-y-2 border border-slate-500 text-white">
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image
                            className="object-cover object-center mx-auto"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                            />
                    </div>

                <section className="p-5 bg-slate-500 w-full">
                    <div className="flex flex-col md:flex-row  justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold">{post.title}</h1>

                            <p className="font-serif font-normal">
                               {new Date(post._createdAt).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                            </p>
                        </div> 
                        <div className="m-2">
                            <Image
                                className="rounded-full"
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                height={43}
                                width={43}
                                />
                        </div>
                        <div className="w-64">
                            <h3 className="text-sm font-thin">{post.author.name}</h3>
                            <div>
                                {/*TODO Author BIO*/}
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-auto space-x-2">
                           {post.categories.map ((category) => (
                                <p key={category._id} className="bg-gray-800 text-white px-3 py-1 
                                rounded-full text-sm font-semibold mt-4">{category.title}</p>
                           ))}
                        </div>
                    </div>
                </section>

                </div>
            </section>
                <div className="max-w-3xl ml-auto mt-5 font-light first-letter:font-serif first-letter:text-3xl first-letter:text-sky-700 first-letter:font-semibold" >
            <PortableText value={post.body} components={RichTextComponents}/>
                </div>
        </article>
    )
}

export default Post