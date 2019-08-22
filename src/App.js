import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import './assets/css/styles.scss';


function App() {
  return (
    <div style={{height: '100%'}}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/index" component={Index} />
      </Router>
    </div>
  );
}

export default App;
