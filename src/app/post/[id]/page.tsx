import { getPosts } from "@/actions/posts.actions";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const slug = (await params).id

  const posts = await getPosts();
  const post = posts.find((p) => p.id === slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose max-w-none">{post.content}</div>
    </div>
  );
}

