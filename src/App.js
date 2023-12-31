import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { store } from './middleware';
import PostList from './components/Posts/PostList';
import Layout from './components/Layout';
import AddPostForm from './components/Posts/AddPostForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PostList />} />

            <Route path="post">
              <Route index element={<AddPostForm />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
