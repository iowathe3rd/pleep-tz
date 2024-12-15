import { getPosts } from "@/actions/posts.actions";
import CreatePostButton from "@/components/CreatePostButton";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome to My Blog</h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Discover insightful articles on web development, technology, and more.
        </p>
        <div className="flex justify-center gap-4">
          <CreatePostButton />
          <Button variant="outline">Subscribe</Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}

