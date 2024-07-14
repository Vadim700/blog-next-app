import { getPostById } from '@/services/getPosts';
import { updatePost } from '../../actions';

type Props = {
  params: {
    id: string;
  };
};

export default async function Profile({ params: { id } }: Props) {
  const post = await getPostById(id);

  return (
    <div>
      <h1>Profile of {post?.title}</h1>

      <form className='form' action={updatePost}>
        <input
          type="text"
          placeholder="title"
          required
          name="title"
          defaultValue={post?.title}
        />
        <textarea
          placeholder="content"
          required
          name="body"
          defaultValue={post?.body}
          className='editText'
        />
        <input type="hidden" name="id" value={post?.id} />
        <div>
          <input type="submit" value="Update post" />
        </div>
      </form>
    </div>
  );
}
