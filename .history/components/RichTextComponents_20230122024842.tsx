import Image from "next/image"
import Link from "next/link"
import urlFor from "../lib/urlFor"

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 m-5 mx-auto">
                    <Image
                        className="object-contain"
                        src={urlFor(value).url()}
                        alt="Blog post image"
                        fill
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-9 py-4 list-disc space-y-4">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-5 ml-7 py-5 list-decimal px-3">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-5xl py-5 font-bold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-4xl py-5 font-bold">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-3xl py-5 font-bold">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-2xl py-3 font-bold">{children}</h4>
        ),
        normal: ({ children }: any) => (
            <p className="text-lg py-2 from-stone-900">{children}</p>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className="border-l-sky-800 border-l-4 pl-4 py-4 my-4">
                {children}
            </blockquote>
        ),      
    },
    marks: {
        Link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
            ? "noreferrer noopener"
            : undefined

            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-sky-700 hover:decoration-black">
                        {children}
                </Link>
            )
        }, 
    },
}