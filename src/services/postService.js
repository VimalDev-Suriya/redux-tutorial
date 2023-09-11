import { blogApiInstance } from '../axios';

export const addNewPost = async (post) => {
  return blogApiInstance.post('/posts', post);
};

export const getPosts = async () => {
  return blogApiInstance.get('/posts', {
    params: {
      userId: 1,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
