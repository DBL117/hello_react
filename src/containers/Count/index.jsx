import { connect } from 'react-redux'
import countUI from '../../components/Count/count.jsx'
import { createIncrementAction, createDecrementAction, createIncrementActionAsync } from '../../redux/count_action'

// connect需要接受两个函数作为参数  第一个函数是返回的对象 为了返回state 第二个返回也是对象 返回操作state的方法
// 两个方法都是react-redux在内部调用的 把redux中的state和dispatch都通过参数给到了
function mapStateToProps(state) {
  return {
    count: state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    increment: data => {
      dispatch(createIncrementAction(data))
    },
    decrement: data => {
      dispatch(createDecrementAction(data))
    },
    incrementAsync: (data, time) => {
      dispatch(createIncrementActionAsync(data, time))
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(countUI)