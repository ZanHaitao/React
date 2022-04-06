import Pager from '../Pager';
import { connect } from 'dva'

const mapStateToProps = state => ({
  current: state.students.condition.page,
  limit: state.students.condition.limit,
  total: state.students.result.total,
})

const mapDispatchToProps = dispatch => ({
  onPageChange(newPage) {
    dispatch({
      type: "students/setCondition",
      payload: {
        page: newPage
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pager)