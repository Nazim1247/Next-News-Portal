import { NewsItem } from "@/types/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
    next: { revalidate: 60 }, // optional for static regeneration
  });

  const json = await response.json();
  const posts: NewsItem[] = json.data;

  return posts.map((post) => ({
    id: String(post._id),
  }));
}

const NewsDetailsPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${params.id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound(); // If news not found
  }

  const data = await res.json();
  const post: NewsItem = data?.data;

  if (!post) return notFound();

  return (
    <div className="border p-4 rounded-xl shadow max-w-4xl mx-auto space-y-4">
      {post?.imageUrl && (
        <Image
          src={post.imageUrl}
          width={600}
          height={400}
          alt="News Image"
          className="rounded"
        />
      )}
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.snippet}</p>
      <p><strong>Language:</strong> {post.language}</p>
      <p><strong>Published:</strong> {post.published}</p>
      <p><strong>Source:</strong> {post.source}</p>
      <p><strong>Categories:</strong> {post.categories}</p>
    </div>
  );
};

export default NewsDetailsPage;
