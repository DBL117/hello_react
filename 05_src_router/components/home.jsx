import React, { Component } from 'react';
import { NavLink, Switch, Redirect, Route } from 'react-router-dom'
import Message from './homeMessage'
import News from './homeNews'
class home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink to="/home/news" className="list-group-item" activeClassName="myActive" >News</NavLink>
            </li>
            <li>
              <NavLink to="/home/message" className="list-group-item" activeClassName="myActive" >Message</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} ></Route>
            <Route path="/home/message" component={Message}  ></Route>
            <Redirect to="/home/news" ></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default home;