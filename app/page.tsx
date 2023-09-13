import React from 'react'
import fs from 'fs'
import Link from 'next/link'
export const getPostMetadata = () => {
    const folder = "posts/"
    const files = fs.readdirSync(folder)
    const markDownPosts = files.filter((f) => f.endsWith('.md'))
    const slugs = files.map((f) => f.replace('.md', ""))
    return slugs
}
const HomePage = () => {
    const metaData = getPostMetadata()
    console.log(metaData, "DKODODKDOKDO");
    const postPreview = metaData?.map((i) => (
        <div>
            <Link href={`/posts/${i}`} >
                <h2>{i}</h2>
            </Link>
        </div>
    ))

    return (
        <div>
            {postPreview}
        </div>
    )
}

export default HomePage