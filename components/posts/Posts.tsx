import Link from 'next/link';
import styles from './styles.module.scss';
import useSWR from 'swr';
import { getAllPosts } from '@/services/getPosts';
// import { usePosts } from '@/store';
// import { shallow } from 'zustand/shallow';
// import { useEffect } from 'react';

function Posts() {
  const {data: posts, isLoading} = useSWR('posts', getAllPosts);
  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow,
  // );

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  return isLoading ? (
    <h3 className={styles.errorMes}>Loading...</h3>
  ) : (
    <ul className={styles.list}>
      {posts.map((post: any) => {
        return (
          <li key={post.id} className={styles.listItem}>
            <span>{post.id}</span>
            <Link href={`blog/${post.id}`} className={styles.link}>
              {post.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export { Posts };
