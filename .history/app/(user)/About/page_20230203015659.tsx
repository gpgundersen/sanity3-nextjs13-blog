import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"

function About(){
  return <h1>About the author</h1>
}

function aboutSection(){
  return (
    <div>
      <About />
    </div>
  );
}