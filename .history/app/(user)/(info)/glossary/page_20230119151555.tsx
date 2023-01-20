import { groq } from "next-sanity"

const query = groq`
*[_type=='glossary']{
  ...,

}
`

export default function Glossary() {
    return 
    <p>{term.title}</p>
  }