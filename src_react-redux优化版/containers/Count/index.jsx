import { connect } from 'react-redux'
import React, { Component } from 'react';
import { createIncrementAction, createDecrementAction, createIncrementActionAsync } from '../../redux/count_action'
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
// connect需要接受两个函数作为参数  第一个函数是返回的对象 为了返回state 第二个返回也是对象 返回操作state的方法
// 两个方法都是react-redux在内部调用的 把redux中的state和dispatch都通过参数给到了

// 精简写法
export default connect(
  state => ( { count: state } ),
  // mapDispatchToProps不经可以写城一个方法 也可以写成一个对象 dispatch又react-redux内部进行
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementActionAsync,
  }
)(count)