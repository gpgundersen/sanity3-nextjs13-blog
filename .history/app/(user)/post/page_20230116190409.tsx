import { groq } from "next-sanity"

type Props = {
    params: {
        slug: string
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
    return (
        <div>Post: { slug }</div>
    )
}

export default Post