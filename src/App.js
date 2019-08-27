import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './assets/css/styles.scss';
import routes  from './router'

function App() {
  return (
    <div style={{height: '100%'}}>
      <Router>
        {
          routes.map((route,key)=>{
            return (
              <Route key={key} exact={route.exact} path={route.path} 
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
              )} />      
            )
          })
        }
      </Router>
    </div>
  );
}

export default App;
