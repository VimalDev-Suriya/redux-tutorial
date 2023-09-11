import { blogApiInstance } from '../axios';

export const getAuthors = async () => {
  return blogApiInstance.get('/users', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
