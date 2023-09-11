import React from 'react';
import { usePost } from '../../hooks/usePosts';
import PostAuthor from './PostAuthors';

const PostList = () => {
  const { posts } = usePost();

  return posts?.length ? (
    <>
      {posts.map((post) => (
        <article className="excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <p className="excerpt">{post.body.substring(0, 75)}...</p>
          <p className="postCredit">
            <PostAuthor userId={post.userId} />
          </p>
        </article>
      ))}
    </>
  ) : null;
};

export default PostList;
