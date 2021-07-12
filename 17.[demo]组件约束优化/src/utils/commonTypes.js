/* eslint-disable import/no-anonymous-default-export */
import PropTypes from 'prop-types'

export default {
    children: PropTypes.node,
    datas: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
}