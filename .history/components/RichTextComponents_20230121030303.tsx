import Image from "next/image"
import Link from "next/link"
import urlFor from "../lib/urlFor"

interface CustomLinkSchema {
    href: any;
    children: any;
    passHref?: any;
  }
  
  export default ({ href, children, ...props }: CustomLinkSchema) => {
    return (
      <>
        {href?.internal ? (
          <Link href={href.internal.slug.current} {...props}>
            {children}
          </Link>
        ) : href?.external ? (
          <a href={href.external}>{children}</a>
        ) : null}
      </>
    );
  };

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
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
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list-decimal">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-5xl py-10 font-bold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-4xl py-10 font-bold">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-3xl py-10 font-bold">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-2xl py-10 font-bold">{children}</h4>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className="border-l-sky-800 border-l-4 pl-5 py-5 my-5">
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