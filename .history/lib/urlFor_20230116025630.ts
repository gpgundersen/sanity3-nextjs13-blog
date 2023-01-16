import { client } from "./sanity.client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return imageUrlBuilder(client).image(source)
}

export default urlFor