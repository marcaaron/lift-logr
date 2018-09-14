import React, { Component, createRef } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Log from './components/Log';
import Logs from './components/Logs';
import Charts from './components/Charts';
import Help from './components/Help';
import Movements from './components/Movements';
import Picker from './components/Picker';
import { Query } from 'react-apollo';
import { GET_PICKER } from './queries';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.main = createRef()
    this.state = {
      isMounted: false
    }
  }

  componentDidMount(){
    this.setState({
      isMounted: true
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div ref={this.main} className="app-main">
            {this.state.isMounted &&
              <Route exact path="/" component={()=><Log main={this.main}/>}/>
            }
            <Route path="/movements/:type" component={Movements}/>
            <Route path="/logs" component={Logs}/>
            <Route path="/charts" component={Charts}/>
            <Route path="/help" component={Help}/>
          </div>
          <Nav/>
          <Query
            query={GET_PICKER}
          >
            {({data})=>{
              const { picker: { pickerIsOpen, options, values, set_id } } = data;
              if(pickerIsOpen){
                return(
                  <Picker
                    pickerIsOpen={pickerIsOpen}
                    options={options}
                    values={values}
                    set_id={set_id}
                  />
                )
              }
              return null;
            }}
          </Query>
        </div>
      </Router>
    );
  }
}

            // togglePicker={togglePicker}
            // pickerIsOpen={pickerIsOpen}
            // options={options}
            // handleScroll={handleScroll}
            // values={{reps, weight, unit}}


export default App;
