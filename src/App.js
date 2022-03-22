import React from 'react';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Login';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Router>
        <Header />        
        <Routes>
          <Route path='/'  element={<Dashboard />}/>
          <Route path='/login'  element={<Login />}/>
          <Route path='/register'  element={<Register />}/>
          <Route path='/contact'  element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
