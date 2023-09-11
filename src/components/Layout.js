import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { usePost } from '../hooks/usePosts';
import { useAuthors } from '../hooks/useAuthors';
import Header from './Header';
import Loading from './Loading';
import FullScreenError from './FullScreenError';

const Layout = () => {
  const { error, loading, posts, fetchPost } = usePost();
  const {
    error: errorAuthors,
    loading: loadingAuthor,
    authors,
    fetchAuthours,
  } = useAuthors();

  useEffect(() => {
    if (!loading && !posts) {
      fetchPost();
    }

    if (!loadingAuthor && !authors) {
      fetchAuthours();
    }
  }, []);

  if (loading || loadingAuthor) {
    return <Loading />;
  }

  if (error || errorAuthors) {
    return <FullScreenError />;
  }

  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
