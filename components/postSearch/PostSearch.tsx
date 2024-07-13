'use client';
import { FormEventHandler, useState } from 'react';
import styles from './style.module.scss';
import useSWR from 'swr';

type Props = {
  onSearch: (value: any[]) => void;
};

function PostSearch() {
  const {mutate } = useSWR('posts');
  const [search, setSearch] = useState('');
  // const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setSearch('');

    const posts = await getPostsBySearch(search);
    mutate(posts)
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="search"
        placeholder="search"
        value={search}
        className={styles.input}
        onChange={(event) => setSearch(event?.target.value)}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

export { PostSearch };
  function getPostsBySearch(search: string) {
    throw new Error('Function not implemented.');
  }

