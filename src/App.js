import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Log from './components/Log';
import Logs from './components/Logs';
import Charts from './components/Charts';
import Help from './components/Help';
import Movements from './components/Movements';
import Auth from './components/Auth';
import './App.css';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Route exact path="/" component={Auth}/>
          <Route exact path="/log" component={()=>
            <Layout render={ (props, ref) => (
            <Log main={ref} {...props}/>
          )}/>}/>
          <Route exact path="/movements:type" component={()=>
            <Layout render={ (props) => (
            <Movements {...props}/>
          )}/>}/>
          <Route exact path="/logs" component={()=>
            <Layout render={ (props) => (
            <Logs {...props}/>
          )}/>}/>
          <Route exact path="/charts" component={()=>
            <Layout render={ (props) => (
            <Charts {...props}/>
          )}/>}/>
          <Route exact path="/help" component={()=>
            <Layout render={ (props) => (
            <Help {...props}/>
          )}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
