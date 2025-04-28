import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Post from "./components/Post";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select : {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log({posts})
  return (
    <div className={styles.main}>
      <Link href={'/add-post'}>Add Post</Link>
      <h1>Feed</h1>
      {
        posts.map((post) => {
          return (
            <Post
              key = {post.id}
              id = {post.id}
              title = {post.title}
              content = {post.content}
              authorName = {post.author.name}
            />
          )
        })
      }
    </div>
  );
}

