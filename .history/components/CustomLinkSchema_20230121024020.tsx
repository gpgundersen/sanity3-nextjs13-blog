import Link from "next/link";

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