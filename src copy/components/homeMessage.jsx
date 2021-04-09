import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import Detail from './detail.jsx.js'
class homeMessage extends Component {
  state = {
    messageArr: []
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messageArr: [
          { id: '001', title: 'message1' },
          { id: '002', title: 'message2' },
          { id: '003', title: 'message3' },
          { id: '004', title: 'message4' },
          { id: '005', title: 'message5' }
        ]
      })
    }, 1000)
  }
  // 编程导航
  pushShow = id => {
    this.props.history.push(`/home/message/detail/${id}`)
  }
  replaceShow = id => {
    this.props.history.replace(`/home/message/detail/${id}`)
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
              return <li key={item.id} >
                <Link to={`/home/message/detail/${item.id}`}  > {item.title} </Link>
                <button onClick={() => { this.pushShow(item.id) }} >push查看</button>&nbsp;&nbsp;
                <button onClick={() => { this.replaceShow(item.id) }} >replace查看</button>
              </li>
            })
          }
        </ul>
        <button>回退</button>
        <hr />
        <Route path={`/home/message/detail/:id`}component={Detail} ></Route>
      </div>
    );
  }
}

export default homeMessage;