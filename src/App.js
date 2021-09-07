import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './footer/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact'
import TopBar from './navbar/TopBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Router>
        <TopBar/>
        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route exact path="/me">
            <About />  
          </Route>
          <Route exact path="/textmemaybe">
            <Contact />  
          </Route>  
        </Switch>
        <Footer />
        </Router>    
    </div>
  );
}

export default App;
