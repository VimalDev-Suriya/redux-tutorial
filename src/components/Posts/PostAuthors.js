const PostAuthor = ({ authorId }) => {
  const authors = [];
  const author = authors.find((author) => author.id === authorId);

  return <span>by {author ? author.name : 'Unknown author'}</span>;
};
export default PostAuthor;
