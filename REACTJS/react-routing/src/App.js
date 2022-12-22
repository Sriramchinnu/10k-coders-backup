import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Feature from './component/Feature';
import Pricing from './component/Pricing';
import Nomatch from './component/Nomatch';
import Navbar from './component/Navbar';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    
    <div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/feature' element={<Feature/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='*' element={<Nomatch/>}/>
      
      

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
