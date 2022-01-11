import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Homepage } from './component/homepage';
import { Dashboard } from './component/dashboard';
import { Setting } from './component/setting';
import { Login } from './component/login';
import { Nav } from './component/navigation';

function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
     
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/setting" element={<Setting/>}></Route>
      
      
      </Routes>
      
      </BrowserRouter>
     
    </div>
   
     
   
  );
}

export default App;
