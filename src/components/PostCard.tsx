'use client'

import { deletePost } from "@/actions/posts.actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/posts";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      await deletePost(post.id);
      router.refresh();
    });
  };

  const handleClick = () => {
    router.push(`/post/${post.id}`);
  };

  return (
    <Card className="cursor-pointer" onClick={handleClick}>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{post.content}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="destructive" 
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
          disabled={isPending}
        >
          {isPending ? 'Deleting...' : 'Delete'}
        </Button>
      </CardFooter>
    </Card>
  );
}

