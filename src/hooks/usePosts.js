import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../middleware/slices/postSlice";
import { fetchPost } from "../middleware/thunks/postsThunk";

export const usePost = () => {
  const posts = useSelector((state)=> state.posts.postList)
  const loading = useSelector((state)=> state.posts.loading);
  const error = useSelector((state)=> state.posts.error);

  const dispatch = useDispatch();

  const addPostStore = (post) => dispatch(addPost(post));

  const fetchpostStore = () => dispatch(fetchPost())

  return {
    posts,
    loading,
    error,
    addPostStore,
    fetchpostStore
  };
};
