import React, { Component, Fragment, createRef } from 'react';
import Picker from './Picker';
import Header from './Header';
import Nav from './Nav';
import { Query } from 'react-apollo';
import { GET_PICKER } from '../queries';

class Layout extends Component {
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
  render(){
    return(
      <Fragment>
      <Header/>
      <div ref={this.main} className="app-main">
        {this.props.render(this.props, this.main)}
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
    </Fragment>
    )
  }
}

export default Layout;
