import React from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Header } from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import About from './components/About/About';

function App() {
  
  return (
    <Router>
      <div>
        <Header />
        <div style={{marginTop: '20px'}}>
          
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/posts' component={Posts} />
              <Route exact path='/about' component={About} />
            </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
