import React, { Component } from 'react'
import List from './components/list/list.jsx'
import Search from './components/search/search.jsx'
export default class App extends Component {
  state = {
    isLoading: false,
    isFirst: true,
    error: '',
    users:[]
  }
  updateAppState = obj => {
    this.setState(obj)
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state} />
      </div>
    )
  }
}