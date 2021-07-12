import React, { Component } from 'react'

export default class App extends Component {
    state = {
        lgoinId: '',
        loginPwd: '',
        radioVal: 'male',
        chooseLoves: [],
        loves: [
            { value: 'lanqiu', text: '篮球' },
            { value: 'zhuqiu', text: '足球' },
            { value: 'movie', text: '电影' }
        ],
        city:'beijing'
    }

    handleForm = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                value = [...this.state.chooseLoves, value];
            } else {
                value = this.state.chooseLoves.filter(it => it !== value);
            }
        }
        this.setState({
            [name]: value
        })
    }

    getChecks() {
        return this.state.loves.map(it => <label key={it.value}>
            <input type="checkbox" name="chooseLoves" value={it.value}
                checked={this.state.chooseLoves.includes(it.value)}
                onChange={this.handleForm} />
            {it.text}
        </label>)
    }

    render() {
        return (
            <div>
                <p>
                    <label>账号：<input type="text" name="lgoinId" value={this.state.lgoinId} onChange={this.handleForm} /></label>
                </p>
                <p>
                    <label>密码：<input type="password" name="loginPwd" value={this.state.loginPwd} onChange={this.handleForm} /></label>
                </p>
                <p>
                    <label>性别：</label>
                    <label><input type="radio" name="radioVal" value="male" checked={this.state.radioVal === 'male'} onChange={this.handleForm} />男</label>
                    <label><input type="radio" name="radioVal" value="female" checked={this.state.radioVal === 'female'} onChange={this.handleForm} />女</label>
                </p>
                <p>
                    <label>爱好：</label>
                    {this.getChecks()}
                </p>
                <p>
                    <label>城市：</label>
                    <select name="city" value={this.state.city} onChange={this.handleForm}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="guangzhou">广州</option>
                    </select>
                </p>
                <p>
                    <button onClick={() => {
                        console.log(this.state)
                    }}>获取Form表单内容</button>
                </p>
            </div>
        )
    }
}
