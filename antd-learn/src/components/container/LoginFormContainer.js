import { connect } from "umi"
import LoginForm from '../LoginForm'
import { routerRedux } from "dva"
import { message } from 'antd'

const mapDispatchToProps = dispatch => ({
  async onLogin(loginId, loginPwd) {
    const result = await dispatch({
      type: "loginUser/fetchLogin",
      payload: {
        loginId,
        loginPwd
      }
    });
    if (result) {
      message.success("登录成功",1);
      dispatch(routerRedux.push("/"))
    } else {
      message.error("账号或密码错误",1);
    }
  }
})

export default connect(null, mapDispatchToProps)(LoginForm);