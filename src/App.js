import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListForm from './views/listForm';
import ModifyForm from './views/modifyForm';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/listform' element={<ListForm />} />
          <Route path='/modifyform' element={<ModifyForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
