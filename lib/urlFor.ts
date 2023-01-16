import { client } from "./sanity.client"
import imageUrlBuilder from "@sanity/image-url"

const theBuilder = imageUrlBuilder(client);

function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
}

export default urlFor;