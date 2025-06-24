import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import AddUser from './users/AddUser';

function App() {
  return (
    <div className="App">
      <Router> 
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route excat path='/adduser' element={<AddUser/>}/>
      </Routes>
      
      </Router>

    </div>
  );
}

export default App;
