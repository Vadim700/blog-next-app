/*export const getAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) throw new Error('Unable to fentch posts.');

  return response.json();
};

export const getPostById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) throw new Error('Unable to fetch post')
  
  return response.json();
}

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `/api/posts?q=${search}`,
  );

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};*/
import { prisma } from '@/lib/prisma';

export function getPostById(id: string) {
  return prisma.post.findUnique({
    where: {
      id,
    },
  });
}

export function getAllPosts() {
  return prisma.post.findMany();
}
