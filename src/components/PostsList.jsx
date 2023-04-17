import { useLoaderData } from 'react-router-dom';

import Post from './Post';

import classes from './PostsList.module.css';

function PostsList() {
  const posts = useLoaderData();
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={classes.noPosts}>
          <h1>No posts yet!</h1>
          <p>Try adding some.</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
