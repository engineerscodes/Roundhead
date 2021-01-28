import React ,{Component} from 'react';
import './App.css';
//import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";
/*import SideBar from './components/SlideBar/sideBar';
import Banner from './components/Banner/Banner'
import About from './components/About/About';
import {AboutInfo,Anncounment} from './components/About/infoAbout' */

import TeamMain from './components/Teams/TeamMain'
import HomePage from './RouterPages/HomePage';

import ScrollToTop from './components/ScrollToTop'

class App extends Component 
{  
  
  render(){
  return (
    <Router>
       <ScrollToTop/>
    <div className="App">
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/Team' component={TeamMain} exact/>
       </Switch> 
    </div>
    </Router>
  );
  }
}

export default App;

// <HomePage/>
//<TeamMain/>