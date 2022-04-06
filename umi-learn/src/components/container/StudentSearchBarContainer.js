import { connect } from 'dva'
import StudentSearchBar from '../StudentSearchBar'

const mapStateToProps = state => ({
  search: state.students.condition.key,
  sex: state.students.condition.sex
})

const mapDispatchToProps = dispatch => ({
  onSearch(condition) {
    condition.page = 1;
    dispatch({
      type: "students/setCondition",
      payload: condition
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar)