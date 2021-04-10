import React, { Component } from 'react';
class count extends Component {
  handleIncrement = () => {
    const value = this.select.value * 1
    this.props.increment(value)
  }
  handleDecrement = () => {
    const value = this.select.value * 1
    this.props.decrement(value)
  }
  handleAddIncrement = () => {
    const value = this.select.value * 1
    if( this.props.count % 2 !== 0 ){
      this.props.increment(value)
    }
  }
  handleAsyncIncrement = () => {
    const value = this.select.value * 1
    this.props.incrementAsync(value, 500)
  }
  render() {
    // ui组件通过props就能获得容器组件传来的状态和操作状态的方法
    return (
      <div>
        <h1>当前的Count: { this.props.count } </h1>
        <hr />
        <select ref={select => { this.select = select }} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.handleIncrement} >+</button>
        <button onClick={this.handleDecrement} >-</button>
        <button onClick={this.handleAddIncrement} >if Add Increment</button>
        <button onClick={this.handleAsyncIncrement} >Async+</button>
      </div>
    );
  }
}

export default count;