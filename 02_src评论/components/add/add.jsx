import React, { Component } from 'react';
import uuid from 'uuid'
class add extends Component {
  handleAdd = () => {
    const name = this.name.value
    const content = this.content.value
    if( !name.trim() || !content.trim() ){
      alert('name or content can not empty')
      return
    }
    const { getComment } = this.props
    getComment({
      id: uuid(),
      name,
      content
    })
    this.content.value = this.name.value = ''
  }
  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input ref={name => { this.name = name }} type="text" className="form-control" placeholder="用户名" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea  ref={ content => { this.content = content }} className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this.handleAdd} type="button" className="btn btn-default pull-right" >提交</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default add;