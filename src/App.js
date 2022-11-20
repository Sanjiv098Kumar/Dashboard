
import './App.css';
import Homepage from './Components/Homepage';
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup'
import { AuthProvider } from './Context/Authcontext';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        
        </Routes>
      </AuthProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
