import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { usePost } from '../hooks/usePosts';
import { useAuthors } from '../hooks/useAuthors';
import Header from './Header';
import Loading from './Loading';
import FullScreenError from './FullScreenError';

const Layout = () => {
  const { error, loading, posts, fetchpostStore } = usePost();
  const {
    error: errorAuthors,
    loading: loadingAuthor,
  } = useAuthors();

  useEffect(() => {
    if (!loading && !posts) {
      fetchpostStore();
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
