import React from 'react'
import PageComp from './components/PageComp';

export default class PageTest extends React.Component {
    state = {
        current: 1,
        total: 100000,
        limit: 10,
        panelPage:5
    }

    handleChangePage = (newPage) => {
        this.setState({
            current:newPage
        })
    }

    render() {
        return (
            <div>
                <PageComp {...this.state} onChangePage={this.handleChangePage}/>
            </div>
        )
    }
}
