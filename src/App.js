import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Text from './text.js';
import Itext from './itext'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Itext/>}/>
        <Route path='/:name' element={<Text/>} />
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

