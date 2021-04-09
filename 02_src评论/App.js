import React, { Component } from 'react'
import Add from './components/add/add.jsx'
import List from './components/list/list.jsx'
export default class App extends Component {
  state = {
    commentObj: {}
  }
  getComment = commentObj => {
    // 不能这样直接这样获取状态中的对象类型 会产生一定印象
    // let { comments } = this.state
    this.setState({
      commentObj
    })
  }
  render() {
    return (
      <div>
        <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <Add getComment={this.getComment} />
            <List commentObj={this.state.commentObj} />
          </div>
        </div>
      </div>
    )
  }
}