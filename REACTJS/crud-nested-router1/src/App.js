import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Create from './components/Create';
import Delete from './components/Delete';
import Edit from './components/Edit';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import User from './components/User';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Layout/>}>
        <Route index element={<Users/>}/>
       <Route path='/Delete/:id'element={<Delete/>}/>
       <Route path='/Edit/:id' element={<Edit/>}/>
       <Route path='/Create' element={<Create/>}/>
      

      </Route>
     </Routes> 
     </BrowserRouter>


    </div>
  );
}

export default App;
