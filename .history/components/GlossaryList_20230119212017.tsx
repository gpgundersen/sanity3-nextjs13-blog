import Image from "next/image"
import urlFor from "../lib/urlFor"
import glossary from "../schemas/glossary"
import ClientSideRoute from "./ClientSideRoute"

type Props = {
    posts: Glossary[]
}

function GlossaryList({posts}: Props){
    return (
        <div>
            <hr className="border-b-orange-700 mb-10"></hr>
        
        <div>
            {posts.map((glossary) => (
                <ClientSideRoute key={glossary._id} route={`/glossary/${glossary.slug.current}`}>
                    <div>
                        <div>
                            <Image
                                className=""
                                src={urlFor(glossary.image).url()}
                                alt={glossary.term}
                                fill
                                />
                        </div>
                    </div>
                </ClientSideRoute>
            ))}
        </div></div>
    )
}