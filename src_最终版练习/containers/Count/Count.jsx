import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementActionAsync } from '../../redux/actions/count'
class Count extends Component {
  handleIncrement = () => {
    const { value } = this.sle
    this.props.increment(value * 1)
  }
  handleDecrement = () => {
    const { value } = this.sle
    this.props.decrement(value * 1)
  }
  handleIncrementIfAdd = () => {
    const { value } = this.sle
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  handleIncrementAsycn = () => {
    const { value } = this.sle
    this.props.incrementAsync(value * 1)
  }

  render() {
    return (
      <div>
        <h1>Count: {this.props.count} </h1>
        <h2>Person Length: { this.props.person.length }</h2>
        <select ref={sle => { this.sle = sle }} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.handleIncrement} >+</button>
        <button onClick={this.handleDecrement} >-</button>
        <button onClick={this.handleIncrementIfAdd} >if Add +</button>
        <button onClick={this.handleIncrementAsycn} >Async +</button>
      </div>
    );
  }
}
export default connect(
  state => ({ count: state.count, person: state.person }),
  // dispatch => {
  //   return {
  //     increment: data => { dispatch(createIncrementAction(data)) },
  //     decrement: data => { dispatch(createDecrementAction(data)) },
  //     incrementAsync: data => { dispatch(createIncrementActionAsync(data)) }
  //   }
  // },
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementActionAsync
  }
)(Count)