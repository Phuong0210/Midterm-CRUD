import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
//import Header from './component/Header';
import News from './BaiKT/Header';
import Content from './BaiKT/content';
import {Route , Switch , Link, BrowserRouter }from 'react-router-dom';
import routes from './routes';
class App extends Component {
 
  render() {
    return (
       <BrowserRouter>
        <News></News>
        <Content></Content>
       {/* <Switch>
        
         {routes.map((route,index)=>(
         <Route key={index} path={route.path} component={route.main} exact={route.exact} />
         )
         )}
       </Switch> */}
    </BrowserRouter>
    
    );
  }
}

export default App;

