import React, { Component } from 'react'
import List from './components/list/list.jsx'
import Search from './components/search/search.jsx'
export default class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Search />
        <List/>
      </div>
    )
  }
}