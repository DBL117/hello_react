import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementActionAsync } from '../../redux/count_action'
import React, { Component } from 'react';
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
  state => ({ count: state }),
  // 正常版本 一个函数 返回一个处理的对象
  // dispatch => {
  //   return {
  //     increment: data =>{
  //       dispatch(createIncrementAction(data))
  //     },
  //     decrement: data => {
  //       dispatch(createDecrementAction(data))
  //     },
  //     incrementAsync: (data, time) => {
  //       dispatch(createIncrementActionAsync(data, time))
  //     }
  //   }
  // }
  // 精简版
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementActionAsync
  }
)(Count)