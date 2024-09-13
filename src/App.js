import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './views/list';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/list' element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
