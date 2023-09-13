import fs from 'fs';
import React from 'react'
import Markdown from 'markdown-to-jsx'
import { getPostMetadata } from '@/app/page';
const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf-8");
    return content
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const mapDataFile = getPostMetadata()
    return mapDataFile.map((i) => ({
        slug: i
    }))
}
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`


const PostPage = (props: any) => {
    const slug = props.params.slug
    const content = getPostContent(slug)


    return (
        <p>
            <h1>This is a post: {slug}</h1>
            <Markdown>{content}</Markdown>
        </p>
    )
}

export default PostPage