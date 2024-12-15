'use server';

import { prisma } from '@/lib/prisma';
import { Post } from '@/types/posts';

export async function getPosts(): Promise<Post[]> {
  return prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function createPost(data: { title: string; content: string }): Promise<Post> {
  return prisma.post.create({
    data,
  });
}

export async function deletePost(id: string): Promise<void> {
  await prisma.post.delete({
    where: { id },
  });
}
