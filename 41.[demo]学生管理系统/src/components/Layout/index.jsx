import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default class index extends PureComponent {

  static propTypes = {
    header: PropTypes.element,
    aside: PropTypes.element,
    children: PropTypes.element
  }

  render() {
    return (
      <div className="layout">
        <header className="layout-header">
          {this.props.header}
        </header>
        <div className="layout-container">
          <aside className="aside">
            {this.props.aside}
          </aside>
          <main className="main">
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}

