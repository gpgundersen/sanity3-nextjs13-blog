import Image from "next/image"
import urlFor from "../lib/urlFor"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import ClientSideRoute from "./ClientSideRoute"
import glossary from "../schemas/glossary"
import Glossary from "../app/(user)/(info)/glossary/[slug]/page"

type Props = {
    posts: Glossary[]
}

function GlossaryIndex({ posts }: Props){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-10">
            {/* Posts */}
            {posts.map((glossary) => (
                <ClientSideRoute key={glossary._id} route={`/glossary/${glossary.slug.current}`}>
                <div className="flex flex-col group cursor-pointer m-1"> 
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-95 
                transition-transform duration-200 ease-out">
                    <Image
                        className="object-cover object-left lg:object-center"
                        src={urlFor(glossary.image).url()}
                        alt={glossary.term}
                        fill
                    /> 
            </div>
                <p className="font-medium text-sm text-slate-800 mt-3 flex items-center group-hover:underline">
                Read
                <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
                </p>
                </div>
        </ClientSideRoute> 
))}</div>

)}

export default GlossaryIndex