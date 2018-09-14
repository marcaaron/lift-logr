import React, { Component, createRef } from 'react';
import { Mutation } from 'react-apollo';
import LogItemDetails from './LogItemDetails';
import { DELETE_LOG_ENTRY } from '../mutations';
import './LogItem.css';

function scaleTouch(move, [min, max]){
  if(move > max) { move = 60;}
  if(move < min) { move = 0;}
  return move;
}

class LogItem extends Component {
  constructor(props){
    super(props);
    this.item = createRef();
    this.state = {
      touchStartValue: 0,
      touchMoveValue: 0
    };
  }

  handleTouch = (e) => {
    this.setState({touchStart: e.touches[0].clientX});
  }

  handleTouchMove = (e) => {
    let moved = scaleTouch(e.touches[0].clientX-this.state.touchStart, [0,60]);
    if(moved >= 0 && moved <= 60){
      this.setState({touchMoveValue: moved});
    }
  }

  handleTouchEnd = (e) => {
    if(this.state.touchMoveValue > 50) {
      this.item.current.style.opacity = `0`;
    }
    this.setState({touchMoveValue: 0});
  }

  handleTransitionEnd = ({propertyName}, deleteLogEntry) => {
    this.props.main.current.style.transform = `translateY(0)`;
    if(propertyName==='opacity'){
      deleteLogEntry({
        variables: { id: this.props.id }
      }).then(()=>{
        const children = [...this.props.main.current.children].slice(this.props.index);
        children.forEach(child=>{
          child.style.animation = `slideup 0.3s`;
        })
        setTimeout(()=>{
          children.forEach(child=>{
            child.style.animation = ``;
          })
        }, 300);
      });
    }
  }

  render(){
    const { handleTouch, handleTransitionEnd, handleTouchMove, handleTouchEnd } = this;
    return(
      <div>
        <Mutation mutation={DELETE_LOG_ENTRY}>
          {(deleteLogEntry)=>(
            <div
              ref={this.item}
              onTouchStart={handleTouch}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTransitionEnd={(e)=>handleTransitionEnd(e, deleteLogEntry)}
              className="log-item"
              style={{transform:`translateX(${this.state.touchMoveValue}px)`}}
            >
              <LogItemDetails {...this.props}/>
            </div>
          )}
        </Mutation>
      </div>
    )
  }
}

export default LogItem;
