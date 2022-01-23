import { Routes, Route} from 'react-router-dom';

import { Layout } from './components/Layout';
import { Details } from './pages/Details';
import { WatchLaterList } from './pages/WatchLaterList';
import { NotFoundPage } from './pages/NotFoundPage';

const App = () => {

  return(
    <>
    <Routes>
      <Route path='/'  element={<Layout/>}></Route>
      <Route path='details/:id' element={<Details/>}></Route>
      <Route path='watch_later_list' element={<WatchLaterList/>}></Route>
      <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
