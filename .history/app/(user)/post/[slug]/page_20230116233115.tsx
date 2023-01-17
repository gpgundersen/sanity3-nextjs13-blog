import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import  Image  from "next/image"
import urlFor from "../../../../lib/urlFor"

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
        <article className="px-10 pb-28">
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
                    <div className="flex flex-col md:flex-row justify between gap-y-5">
                        <div>
                            <h1 className="text-4xl font-extrabold">{post.title}</h1>

                            <p>
                               {new Date(post._createdAt).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                            </p>
                        </div> 
                        <div>
                            <Image
                                className="rounded-full"
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                height={42}
                                width={42}
                                />
                        </div>
                        <div className="w-64">
                            <h3 className="text-sm font-thin">{post.author.name}</h3>
                            <div>
                                {/*TODO Author BIO*/}
                            </div>
                        </div>
                    </div>
                </section>

                </div>
            </section>
        </article>
    )
}

export default Post