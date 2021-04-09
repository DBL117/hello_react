import React, { Component } from 'react';
import Item from '../item/item.jsx'
import './list.css'
class list extends Component {
  state = {
    comments: [
      { id: '001', name: 'jd', content: 'react好难' },
      { id: '002', name: 'xj', content: 'react不怎么难' },
      { id: '003', name: '鲍蓉', content: 'react好简单' }
    ]
  }

  UNSAFE_componentWillReceiveProps(params) {
    // App 组件一传东西过来就接到 更新
    const { commentObj } = params
    let comments = [...this.state.comments]
    comments.unshift(commentObj)
    this.setState({comments})
  }
  deleteComment = id => {
    let comments = [...this.state.comments]
    comments = comments.filter(item =>  item.id !== id )
    this.setState({comments})
  }
  render() {
    // const { comments, deleteComment } = this.props
    const { comments } = this.state
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display: comments.length === 0 ? 'block' : 'none' }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map(item => {
              return <Item key={item.id} {...item} deleteComment={this.deleteComment} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default list;