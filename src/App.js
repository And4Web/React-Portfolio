import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/skills' element={<Skills/>}/>
            <Route exact path='/projects' element={<Projects/>}/>
            <Route exact path='/services' element={<Services/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='*' element={<NotFound/>}/>

          </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
