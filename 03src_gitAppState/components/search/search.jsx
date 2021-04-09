import React, { Component, createRef } from 'react';
import axios from 'axios'
class search extends Component {
  inputRef = createRef()
  handleSearch = () => {
    const {updateAppState} = this.props
    const keyWord = this.inputRef.current.value
    if( keyWord.trim() === '' ) return
    const url = `https://api.github.com/search/users?q=${keyWord}`
    updateAppState({
      users: [],
      isFirst: false,
      isLoading: true,
      error:''
    })
    axios.get(url)
      .then(
        value => {
          updateAppState({
            users: value.data.items,
            isFirst: false,
            isLoading: false,
            error:''
          })
        },
        reason => {
          updateAppState({
            users: [],
            isFirst: false,
            isLoading: false,
            error: reason
          })
        }
      )
      this.inputRef.current.value = ''
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={this.inputRef}  />&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    );
  }
}

export default search;