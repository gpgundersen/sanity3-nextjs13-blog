import Image from "next/image"
import urlFor from "../lib/urlFor"
import glossary from "../schemas/glossary"
import ClientSideRoute from "./ClientSideRoute"

type Props = {
    term: Glossary[]
}

function GlossaryList({term}: Props){
    return (
        <div>
            {term.map((glossary) => (
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
        </div>
    )
}