import { connect } from "umi"
import LoginForm from '../LoginForm'
import { routerRedux } from "dva"

const mapDispatchToProps = dispatch => ({
  async onLogin(loginId, loginPwd) {
    const result = await dispatch({
      type: "loginUser/fetchLogin",
      payload: {
        loginId,
        loginPwd
      }
    });
    if(result){
      dispatch(routerRedux.push("/"))
    }else{
      alert("账号或密码错误")
    }
  }
})

export default connect(null, mapDispatchToProps)(LoginForm);