import React, { Component } from 'react';
import store from '../../redux/store'
class count extends Component {
  handleIncrement = () => {
    const value = this.select.value * 1
    store.dispatch({ type: 'increment', data: value })
  }
  handleDecrement = () => {
    const value = this.select.value * 1
    store.dispatch({ type: 'decrement', data: value })

  }
  handleAddIncrement = () => {
    const value = this.select.value * 1
    if (store.getState() % 2 !== 0) {
      store.dispatch({ type: 'increment', data: value })
    }
  }
  handleAsyncIncrement = () => {
    const value = this.select.value * 1
    setTimeout(() => {
      store.dispatch({ type: 'increment', data: value })
    }, 500)

  }
  render() {
    return (
      <div>
        <h1>当前的Count: {store.getState()} </h1>
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