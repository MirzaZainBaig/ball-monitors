import "bootstrap/dist/css/bootstrap.min.css";
import Form from './form';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Signup from './signup';
// import Home from './home';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}></Route>
          {/* <Rou te path='/signup' element={<Signup/>}></Route> */}
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
