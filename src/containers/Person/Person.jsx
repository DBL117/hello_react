import React, { Component } from 'react';
import { connect } from 'react-redux'
import uuid from 'uuid'
import { addPerson } from '../../redux/actions/person'
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
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Person Component</h1>
        <h2>Count Component ：{this.props.count}</h2>
        <input type="text" ref={c => { this.name = c }} />
        <input type="text" ref={c => { this.age = c }} />
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
    addPerson
  }
)(Person)
