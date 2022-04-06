import { connect, routerRedux } from 'dva'

function PrivatePage(props) {
  if (props.loginUser) {
    return props.children
  } else {
    props.returnLogin();
    return null
  }
}

const mapStateToProps = state => ({
  loginUser: state.loginUser
})
const mapDispatchToProps = dispatch => ({
  returnLogin() {
    dispatch(routerRedux.push('/login'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivatePage)