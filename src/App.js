import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListForm from './views/listForm';
import ModifyForm from './views/modifyForm';
import WriteForm from './views/writeForm';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/listform' element={<ListForm />} />
          <Route path='/modifyform' element={<ModifyForm />} />
          <Route path='/writeform' element={<WriteForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
