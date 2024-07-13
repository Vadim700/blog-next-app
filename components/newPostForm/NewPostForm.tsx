import { createPost } from '@/app/blog/actions';
import styles from './styles.module.scss';


export default function NewPostForm() {
  return (
    <form className={styles.form} action={createPost}>
      <input type="text" name="title" placeholder="title" required />
      <textarea name="body" placeholder="content" required />
      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}
