import React, { Component } from 'react'
import Banner from './components/Banner';
export default class App extends Component {

    imgSrc = [
        'https://img1.baidu.com/it/u=3640257532,3301564384&fm=26&fmt=auto&gp=0.jpg',
        'https://img2.baidu.com/it/u=2816433753,267880517&fm=26&fmt=auto&gp=0.jpg',
        'https://img1.baidu.com/it/u=3443714613,873961460&fm=26&fmt=auto&gp=0.jpg',
        'https://img1.baidu.com/it/u=1357518075,2207145940&fm=26&fmt=auto&gp=0.jpg',
        'https://img0.baidu.com/it/u=1965212879,2703864701&fm=26&fmt=auto&gp=0.jpg'
    ]

    render() {
        return (
            <div>
                <Banner imgSrc={this.imgSrc} />
            </div>
        )
    }
}
