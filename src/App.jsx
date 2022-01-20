import { Routes, Route} from 'react-router-dom';

import { Layout } from './components/Layout';
import { Details } from './pages/Details';
import { WatchLater } from './pages/WatchLater';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {

  return(
    <>
    <Routes>
      <Route path='/' index element={<Layout/>}></Route>
      <Route path='details' element={<Details/>}></Route>
      <Route path='watch_later' element={<WatchLater/>}></Route>
      <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
