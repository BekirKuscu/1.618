import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar-Content/Navbar';
import Footer from './Components/Footer-Content/Footer';
import { routes } from './Pages/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
