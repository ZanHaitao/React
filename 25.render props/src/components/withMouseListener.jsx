import React, { PureComponent } from 'react'

const divStyle = {
    width: 300,
    height: 300,
    background: 'red',
    border: '2px solid',
    margin: 'auto',
    position:'relative',
    overflow:'hidden'
}

export default function withMouseListener(Comp) {
    return class withMouseListener extends PureComponent {

        state = {
            x: 0,
            y: 0
        }

        divRef = React.createRef();

        handleMouseMove = e => {
            const { clientX, clientY } = e;
            const { left, top } = this.divRef.current.getBoundingClientRect()
            const currentX = clientX - left;
            const currentY = clientY - top;
            this.setState({
                x:currentX,
                y:currentY
            })
        }

        render() {
            return (
                <div style={divStyle} ref={this.divRef} onMouseMove={this.handleMouseMove}>
                    <Comp {...this.props} {...this.state} />
                </div>
            )
        }
    }

}
