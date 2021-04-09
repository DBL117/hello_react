import React, { Component } from 'react';
import './item.css'
class item extends Component {
  handleDelete = id => {
    if( window.confirm('确定删除吗') ){
      const { deleteComment } = this.props
      deleteComment(id)
    }
  }
  render() {
    const { id, name, content } = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="#1" onClick={() => { this.handleDelete(id) }}>删除</a>
        </div>
        <p className="user"><span >{name}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    );
  }
}

export default item;