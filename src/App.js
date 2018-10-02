import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomeAuthRoute from './HomeAuthRoute';
import AuthRoute from './AuthRoute';
import Log from './components/Log';
import Logs from './components/Logs';
import Charts from './components/Charts';
import Help from './components/Help';
import Movements from './components/Movements';
import MovementCreate from './components/MovementCreate';
import Auth from './components/Auth';
import './App.css';
import Layout from './components/Layout';
import PastLog from './components/PastLog';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" data-testid="App">
          <HomeAuthRoute exact path="/" component={Auth}/>
          <AuthRoute exact path="/log" component={()=>
            <Layout render={ (props, ref) => (
              <Log main={ref} {...props}/>
            )}/>}/>
          <Switch>
            <AuthRoute exact path="/movements/create" component={(props)=>
              <Layout {...props} render={ (props) => (
                <MovementCreate {...props}/>
              )}/>}/>
            <AuthRoute path="/logs/:id" component={(props)=>
              <Layout {...props} render={ (props, ref) => (
                <PastLog {...props}/>
              )}/>}/>
            <AuthRoute exact path="/movements/:type" component={(props)=>
              <Layout {...props} render={ (props) => (
                <Movements {...props}/>
              )}/>}/>
          </Switch>
          <AuthRoute exact path="/logs" component={(props)=>
            <Layout {...props} render={ (props) => (
              <Logs {...props}/>
            )}/>}/>
          <AuthRoute exact path="/charts" component={(props)=>
            <Layout {...props} render={ (props) => (
              <Charts {...props}/>
            )}/>}/>
          <AuthRoute exact path="/help" component={(props)=>
            <Layout {...props} render={ (props) => (
              <Help {...props}/>
            )}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
