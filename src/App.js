import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import WriteForm from './pages/WriteForm';
import EditForm from './pages/EditForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/list' element={<List />} />
          <Route path='/writeForm' element={<WriteForm />} />
          <Route path='/editForm' element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
