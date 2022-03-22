import PropTypes from 'prop-types'

export default {
  children: PropTypes.node,
  groupTypes: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })),
  chooes: PropTypes.arrayOf(PropTypes.string)
}