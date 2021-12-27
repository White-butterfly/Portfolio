import './App.css';
import NavMenu from './components/NavMenu';

// import {BrowserRouter , Router, Route, Switch } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact'
function App() {

  return (
    <>
<Router>
<NavMenu/>
<Routes>
 
  <Route exact path="/pages/Home" element={<Home/>}/>
  <Route exact path="/pages/About" element={<About/>}/>
  <Route exact path="/pages/Projects" element={<Projects/>}/>
  <Route exact path="/pages/Contact" element={<Contact/>}/>

</Routes>
</Router>



    </>
  );
}

export default App;
