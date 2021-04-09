import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import About from './components/about.jsx'
import Home from './components/home.jsx'
import Test from './components/test.jsx'
export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" activeClassName="myActive" to="/about">About</NavLink>
              <NavLink className="list-group-item" activeClassName="myActive" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 用Switch包一下 当路由匹配到的时候不会再向下匹配 可以提高效率 */}
                <Switch>
                  {/* 路由是从上到下 模糊匹配（就是path下的路径完整包含在地址栏上的路由）加了Switch后 已模糊匹配到就不会再向下匹配了 如果给Route组件上加上exact属性 就开启了精准匹配 */}
                  <Route path="/about" component={About} ></Route>
                  <Route path="/home" component={Home}  ></Route>
                  <Route path="/about/test" component={Test} ></Route>
                  {/* 兜底的重定向 */}
                  <Redirect to="/about" ></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}