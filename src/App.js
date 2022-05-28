import './App.css';
import React, { Component } from 'react';

import Header from './BaiKT/Header';

import {Route , Switch , BrowserRouter }from 'react-router-dom';
import routes from './routes1';
class App extends Component {
 
  render() {
    return (
       <BrowserRouter>
       <Header></Header>
       
       <Switch>
        
         {routes.map((route,index)=>(
         <Route key={index} path={route.path} component={route.main} exact={route.exact} />
         )
         )}
       </Switch>
    </BrowserRouter>
    
    );
  }
}

export default App;

