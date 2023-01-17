import Image from "next/image"
import urlFor from "../lib/urlFor"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"


type Props = {
    posts: Post[]
}

function BlogList({ posts }: Props){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-10">
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
                        })}</p> 
                    </div>
                    <div className="flex flex-col md:flex-row">
                        {post.categories.map((category) => (
                            <div className="bg-amber-100 bg-opacity-30 text-center font-semibold text-amber-900 rounded-lg p-1 m-1">
                                <p>{category.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                <p className="font-medium text-sm text-slate-800 mt-3 flex items-center group-hover:underline">
                Read
                <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
                </p>
        </div>
))}</div>

)}

export default BlogList