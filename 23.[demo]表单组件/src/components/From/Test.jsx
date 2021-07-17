import React, { Component } from 'react'
import From from './index';

export default class Test extends Component {
    render() {
        return (
            <From submit={(data)=>{
                console.log(data)
            }}>
                <div>
                    账号：<From.input name="loginId" />
                </div>

                <div>
                    密码：<From.input name="loginPwd" type="password"/>
                </div>

                <div>
                    <From.button>提交</From.button>
                </div>
            </From>
        )
    }
}
