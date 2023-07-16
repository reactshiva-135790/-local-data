import Create from './component/Create';
import Edit from './component/Edit';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/edit' element={<Edit />} />
        <Route exact path='/create-user' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
