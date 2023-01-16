import Image from "next/image"
import urlFor from "../lib/urlFor"
import groq from "groq"

type Props = {
    posts: Post[]
}

function BlogList({ posts }: Props){
    return (
            <div>
                {/* Posts */}
                {posts.map((post) => (
                    <div key={post._id} className="flex flex-col group cursor-pointer"> 
                        <div className="relative w-full h-80 drop-shadow-md group-hover: scale-100 transition-transform duration-200 ease-out">
                        <Image
                            className="object-cover object-left lg:object-center"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        />
                        <div>
                            <div>
                               <p className="font-bold">{post.title}</p>
                               <p>
                                {new Date(post._createdAt).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                                
                                </p> 
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default BlogList