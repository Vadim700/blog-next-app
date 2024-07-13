import { Metadata } from 'next';
import styles from './style.module.scss';
import { getAllPosts, getPostById } from '@/services/getPosts';

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60, // per seconds update data
      },
    },
  );

  return response.json();
}

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPostById(id);

  return (
    <>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.text}>{post.body}</p>
    </>
  );
}
