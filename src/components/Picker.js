import React, { Component, createRef } from 'react';
import './Picker.css';
import { compose, graphql } from 'react-apollo';
import { TOGGLE_PICKER, UPDATE_LOG_ENTRY } from '../mutations';
import { GET_LOG } from '../queries';

function roundTo(pixelHeight, value){
  return Math.round(value/pixelHeight) * pixelHeight;
};

function getIndex(options, value){
  return options.indexOf(value);
}

class Picker extends Component {
  constructor(props){
    super(props);
    this.reps = createRef();
    this.weight = createRef();
    this.unit = createRef();
  }

  handleTouchEnd = ({currentTarget}) => {
    this.refs[currentTarget.dataset.key].scrollTop = roundTo(28, this.refs[currentTarget.dataset.key].scrollTop);
  }

  handleScroll = ({currentTarget}) => {
    const key = currentTarget.dataset.key;
    const height = 28;
    const index = Math.round(currentTarget.scrollTop/height);
    const item = this.props.getLog.currentLog.items.filter(item=>item.id===this.props.set_id)[0];
    if(item[key] !== this.props.options[key][index]){
      this.props.updateLogEntry({
        variables: {id: this.props.set_id, propName: key, value: this.props.options[key][index] }
      })
    }
  }

  componentDidMount(){
    const {options, values} = this.props;
    this.updateScrollValues(options, values);
  }

  updateScrollValues = (options, values) => {
    const height = 28;
    const repsIndex = getIndex(options.reps, values.reps);
    const weightIndex = getIndex(options.weight, values.weight);
    const unitIndex = getIndex(options.unit, values.unit);
    this.refs.reps.scrollTop = repsIndex * height;
    this.refs.weight.scrollTop = weightIndex * height;
    this.refs.unit.scrollTop = unitIndex * height;
  }

  componentWillReceiveProps(next){
    if(this.props.set_id !== next.set_id){
      const { options, values } = next;
      this.updateScrollValues(options, values);
    }
  }

  render(){
    const { handleTouchEnd, handleScroll } = this;
    const { options, pickerIsOpen } = this.props;
    return(
      <div aria-expanded={pickerIsOpen} className="picker">
        {Object.keys(options).map(key=>
          <div key={key} ref={key} onTouchEnd={handleTouchEnd} onScroll={handleScroll} data-key={key} className="picker__column">
            <div className="picker__value"/>
            <div className="picker__value"/>
            {
              options[key].map((value, index)=>
                  <div
                    className={`picker__value`}
                    key={index}
                  >
                    {value}
                  </div>
                )
            }
            <div className="picker__value"/>
            <div className="picker__value"/>
          </div>
        )}
        <div className="picker__capture-line"/>
        <div className="picker__top">
          <button
            onClick={()=>this.props.togglePicker({
              variables: { pickerIsOpen: !this.props.pickerIsOpen }
            })}
          className="picker__btn-done">Done</button>
        </div>
        <div className="picker__ui-fade"/>
      </div>
    )
  }
}

export default compose(
  graphql(TOGGLE_PICKER, {name: 'togglePicker'}),
  graphql(UPDATE_LOG_ENTRY, {name: 'updateLogEntry'}),
  graphql(GET_LOG, { name: 'getLog' })
)(Picker);
