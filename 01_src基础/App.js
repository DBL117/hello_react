import React, { Component } from 'react'
import './App.css'
import Hello from './Hello'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="demo">Hello React!!!</h1>
        <Hello/>
      </div>
    )
  }
}
