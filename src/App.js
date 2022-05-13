
import './App.css';
import './stylesheet/Header.css'
import './stylesheet/Home.css'
import './stylesheet/CarDetails.css'
import Header from './javascript/Header';
import Home from './javascript/Home';
import CarDetails from './javascript/CarDetails';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/:id" element={<CarDetails/>}/>
      </Routes>
      <footer>
        Contact Us
      </footer>
    </div>
    </Router>
  );
}

export default App;
