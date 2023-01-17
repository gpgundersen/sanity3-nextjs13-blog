import { client } from "../../../lib/sanity.client"

type Props = {
    params: {
        slug: string;
    };
};

function Post({params: 
    { slug } }: Props) {
        return <div>Post: {slug}</div>;
    }
    

export default Post;