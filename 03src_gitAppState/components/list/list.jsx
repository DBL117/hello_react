import React, { Component } from 'react';
import Item from '../item/item.jsx'
class list extends Component {
  render() {
    const { users, isLoading, isFirst, error } = this.props
    if( isFirst ){
      return <h1>输入关键字搜索</h1>
    }else if (isLoading){
      return <h1>正在拼命加载数据</h1>
    }else if(error){
      return <h1>网络出错</h1>
    }else {
      return (
        <div className="row" >
          {
            users.map(item => {
              return <Item key={item.login} {...item}  />
            })
          }
        </div>
      )
    }
  }
}

export default list;