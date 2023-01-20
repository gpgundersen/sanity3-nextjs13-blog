import { groq } from "next-sanity"
import glossary from "../../../../schemas/glossary"

const query = groq`
*[_type=='glossary']{
  ...,
}
`

export default function Glossary() {
    return 
    <p>{glossary.title}</p>
  }