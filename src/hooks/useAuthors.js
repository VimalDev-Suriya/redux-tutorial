import { useSelector } from "react-redux";

export const useAuthors = () => {
  const authors = useSelector((state)=> state.authors.authorList)
  const loading = useSelector((state)=> state.authors.loading);
  const error = useSelector((state)=> state.authors.error);

  return {
    authors,
    loading,
    error,
  };
};
