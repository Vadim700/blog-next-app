'use client';
import { Metadata } from 'next';
import { Posts } from '@/components/posts/Posts';
import { PostSearch } from '@/components/postSearch/PostSearch';
import styles from './style.module.scss';

const metadata: Metadata = {
  title: 'Blog | Next App',
};


export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
