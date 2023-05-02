import Image from 'next/image'
import { Inter } from 'next/font/google'
import fs from "fs"

const inter = Inter({ subsets: ['latin'] })

const getPostMetadata = () => {
  const path = require('path')
  const dirPath = path.resolve(__dirname, './posts')
  const files = fs.readdirSync(dirPath)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))
  const slugs = markdownPosts.map((file) => file.replace(".md", ""))
  return slugs
}

export default function Home() {
  const postMetaData = getPostMetadata()
  const postPreviews = postMetaData.map((slug) => (
    <div>
      <h2>{slug}</h2>
    </div>
  ))
  return (

    <div>{postPreviews}</div>
  )
}
