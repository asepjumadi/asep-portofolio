import React,{Fragment} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Home from './router/Home/index.js';
import Portofolio from './router/Portofolio/index.js';
import About from './router/About/index.js';
import Experience from './router/Experience';
import Ability from './router/Ability';
import Navigations from './components/navigations';
import './style/sass/home.scss'
export default class App extends React.Component {
  render(){
    return (
      <Router>
      <div >
      <Navigations/>
      <Fragment>
        <Switch>
          <Route path="/experience" component={Experience}/>
          <Route path="/portofolio" component={Portofolio}/>
          <Route path="/about" component={About}/>
          <Route path="/abilities" component={Ability}/>
          <Route exact path="/" component={Home}/>
        </Switch>
        </Fragment>
        </div>
      </Router>
    );
  }
}

