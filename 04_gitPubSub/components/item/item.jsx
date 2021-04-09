import React, { Component } from 'react';
import './item.css'
class item extends Component {
  render() {
    const { avatar_url, html_url, login } = this.props
    return (
      <div className="card">
        <a href={html_url} >
          <img src={avatar_url} style={{ width: '100px' }} alt="gitHub" />
        </a>
        <p className="card-text">{login}</p>
      </div>
    );
  }
}

export default item;