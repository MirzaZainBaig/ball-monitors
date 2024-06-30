import "bootstrap/dist/css/bootstrap.min.css";
import Form from './form';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup';
import Home from './home';
import Login from "./login";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
