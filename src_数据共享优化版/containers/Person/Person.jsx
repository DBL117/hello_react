import React, { Component } from 'react';
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addPerson } from '../../redux/actions/person'
import { createIncrementAction } from '../../redux/actions/count'
class Person extends Component {
  handleAddPerson = () => {
    const name = this.name.value
    const age = this.age.value
    const personObj = {
      name,
      age,
      id: uuid()
    }
    this.props.addPerson(personObj)
  }
  handleIncrement = () => {
    this.props.increment(1)
  }
  render() {
    return (
      <div>
        <h1>Person Component</h1>
        <h2>Count Component ：{this.props.count}</h2>
        <input type="text" ref={c => { this.name = c }} />
        <input type="text" ref={c => { this.age = c }} />
        <button onClick={this.handleIncrement} >操作count数据+1</button>
        <button onClick={this.handleAddPerson} >Add Person</button>
        <ul>
          {
            this.props.person.map(item => {
              return <li key={item.id}>{item.name}---{item.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
export default connect(
  state => ({ person: state.person, count: state.count }),
  {
    addPerson,
    increment: createIncrementAction
  }
)(Person)
