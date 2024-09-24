import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import WriteForm from './pages/WriteForm';
import EditForm from './pages/EditForm';

import List2 from './pages/List2';
import List3 from './pages/List3';
import ItemPerson from './pages/ItemPerson';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/list' element={<List />} />
          <Route path='/writeform' element={<WriteForm />} />
          <Route path='/editform/:no' element={<EditForm />} />

          <Route path='/list2' element={<List2 />} />
          <Route path='/list3' element={<List3 />} />
          <Route path='/itemperson' element={<ItemPerson />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
