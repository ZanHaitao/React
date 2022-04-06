import Header from '../Header'
import { connect } from "umi"
import { routerRedux } from 'dva'

const mapStateToProps = state => ({
  loginUser:state.loginUser
})

const mapDispatchToProps = dispatch => ({
  onLoginOut() {
    dispatch({
      type: "loginUser/fetchLoginOut"
    })
    dispatch(routerRedux.push("/login"))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);