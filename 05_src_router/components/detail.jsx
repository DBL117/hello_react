import React, { Component } from 'react';

class detail extends Component {
  state = {
    messageDetail: [
      { id: '001', title: 'message1', content:'content1' },
      { id: '002', title: 'message2', content:'content1' },
      { id: '003', title: 'message3', content:'content1' },
      { id: '004', title: 'message4', content:'content1' },
      { id: '005', title: 'message5', content:'content1' }
    ]
  }
  render() {
    const { id } = this.props.match.params
    let obj = this.state.messageDetail.find(item => {
      return item.id === id
    })
    if(obj){
      return (
        <div>
          <li>id:{obj.id}</li>
          <li>title:{obj.title}</li>
          <li>content:{obj.content}</li>
        </div>
      );
      
    }else{
      return <h1>暂无数据</h1>
    }
  }
}

export default detail;<li>id:xxx</li>