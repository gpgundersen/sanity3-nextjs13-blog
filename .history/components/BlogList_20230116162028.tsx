import Image from "next/image"
import urlFor from "../lib/urlFor"


type Props = {
    posts: Post[]
}

function BlogList({ posts }: Props){
    return (
            <div>
                {/* Posts */}
                {posts.map((post) => (
                    <div key={post._id} className="flex flex-col group cursor-pointer"> 
                        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-95 
                        transition-transform duration-200 ease-out">
                        <Image
                            className="object-cover object-left lg:object-center"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        /> 
                        <div className="absolute bottom-0 w-full bg-opacity-20 bg-slate-800 backdrop-blur-lg 
                         text-slate-50 p-2 flex justify-between">
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
                            <div>
                                {post.categories.map((category) => (
                                    <div className="bg-amber-100 bg-opacity-90 text-center text-sm font-semibold text-amber-900 rounded-lg m-1 p-1">
                                        <p>{category.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogList