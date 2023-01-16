import { previewData } from "next/headers";

export default function Home() {
    if (previewData()) {
    return <div>Preview Mode</div>
    }
    return (
        <div>Not in preview mode</div>
    )
}