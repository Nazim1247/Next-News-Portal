import { NewsItem } from "@/types/news";
import Image from "next/image";

export const revalidate = 60
export const dynamicParams = true;
export async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/news");
  const json = await response.json();
  const posts: NewsItem[] = json.data;

  return posts.map((post) => ({
    id: String(post._id),
  }));
}


const NewsDetailsPage = async ({params}: {params: {id: string}})=>{
    const post = await fetch(`http://localhost:3000/api/news/${params.id}`).
    then((res)=> res.json())
    return (
        <div className="border p-4 rounded-xl shadow max-w-4xl mx-auto">
            <Image src={post?.imageUrl} width={400} height={400} alt="News Image"/>
            <h2>{post?.title}</h2>
            <p>{post?.description}</p>
            <p>{post?.snippet}</p>
            <p>{post?.language}</p>
            <p>{post?.published}</p>
            <p>{post?.source}</p>
            <p>{post?.categories}</p>
        </div>
    )
}

export default NewsDetailsPage;