import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"

const query = groq `
* [_type=='post']{
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`;

